import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SousTraitance } from 'app/model/sous-traitance';
import { SousTraitanceService } from 'app/SousTraitance.service';
import * as e from 'express';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  SousTraitance : SousTraitance = new SousTraitance();
  public soustraitanceForEdite : SousTraitance ;
  public ajoutFormSoustraitance : FormGroup ;

  constructor(private SousTraitanceService: SousTraitanceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.route.url['_value'].length == 2){
      this.getSoustraitanceById(this.route.url['_value'][1].path);
    }else if (this.route.url['_value'].length == 1){
      this.initForm();
    }
   
  }

  initForm(SousTraitance?){
    this.ajoutFormSoustraitance = this.fb.group({
    
      prix_offre: [SousTraitance ? SousTraitance.prix_offre : ''],
      type: [SousTraitance ? SousTraitance.type : ''],
      role_traitance: [SousTraitance ? SousTraitance.role_traitance :''  ]
      
      
    })
  }

  create() {
    this.SousTraitanceService.addSousTraitance(this.ajoutFormSoustraitance.value).subscribe(() => {
      console.log("bnj");
      this.router.navigateByUrl('/typography');
    });

  }

  updateSoustraitance(){
    this.SousTraitanceService.updateSoustraitance(this.ajoutFormSoustraitance.value,this.soustraitanceForEdite.id_traitance).subscribe((res) => {
      console.log("bnj",res); 
      this.router.navigateByUrl('/typography');
    
     
    });
  }

  roles = [
    "Jardinage",
    "Maintenance",
    "Decoration",
    "Bricolage",
  ]
  selected = "----"



  submit(){
    this.soustraitanceForEdite ? this.updateSoustraitance() : this.create() ;
  
  }
 
  update(e){
    this.selected = e.target.value
  }
  getSoustraitanceById(id) {
    this.SousTraitanceService.getSoustraitance(id).subscribe(SousTraitance => {
       this.soustraitanceForEdite = SousTraitance;
       this.initForm(this.soustraitanceForEdite);
    })
  }

}