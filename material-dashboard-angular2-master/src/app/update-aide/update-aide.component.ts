import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aide } from '../model/Aide';
import { AideService } from '../service/aide.service';

@Component({
  selector: 'app-update-aide',
  templateUrl: './update-aide.component.html',
  styleUrls: ['./update-aide.component.css']
})
export class UpdateAideComponent implements OnInit {

  id:number;
  aide:Aide = new Aide();
  constructor(private aideService:AideService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.aideService.getAideById(this.id).subscribe(
      data =>{this.aide = data}
    );
  }

  onSubmit(){
    this.aideService.updateAide(this.id,this.aide).subscribe(
      data=>{this.goToAideList();}
    )
  }


  goToAideList(){
    this.router.navigate(['aide'])
  }

}
