import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aide } from '../model/Aide';
import { AideService } from '../service/aide.service';

@Component({
  selector: 'app-add-aide',
  templateUrl: './add-aide.component.html',
  styleUrls: ['./add-aide.component.css']
})
export class AddAideComponent implements OnInit {

  aide: Aide;
  constructor(private aideService : AideService,private router: Router) { }

  ngOnInit(): void {
    this.aide={
      idUser:null,
      monatnt:null,
      periode:null,
      type_aide:null
    }
  }

  onSubmit(){
    this.aideService.addAide(this.aide).subscribe(
      data=>{this.goToAideList();}
    );
    
  }

  goToAideList(){
    this.router.navigate(['aide'])
  }

}
