import { Component, OnInit } from '@angular/core';
import { Visite } from 'app/model/Visite';
import { Proprety } from 'app/model/Proprety';
import { VisiteService } from 'app/Visite.service';
import {PropretyService} from '../Proprety.service';

@Component({
  selector: 'app-createvisite',
  templateUrl: './createvisite.component.html',
  styleUrls: ['./createvisite.component.scss']
})
export class CreatevisiteComponent implements OnInit {
  Visite: Visite = new Visite();
  selected: string = 'dumpling';
  PropList: Proprety[];
  nom: string
  constructor(private VisiteService: VisiteService, private prop : PropretyService) { }

  ngOnInit(): void {
    this.prop.getProprety().subscribe( data => this.PropList = data)

  }
  createVisite(){
    //this.idprop=1
    this.nom = this.Visite.proprety
    console.log(this.Visite);
    this.VisiteService.addVisite(this.Visite, this.nom).subscribe();

  }

}

