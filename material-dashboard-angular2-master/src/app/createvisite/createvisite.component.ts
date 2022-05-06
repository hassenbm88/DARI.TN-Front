import { Component, OnInit } from '@angular/core';
import { Visite } from 'app/model/Visite';
import { Proprety } from 'app/model/Proprety';
import { VisiteService } from 'app/Visite.service';

@Component({
  selector: 'app-createvisite',
  templateUrl: './createvisite.component.html',
  styleUrls: ['./createvisite.component.scss']
})
export class CreatevisiteComponent implements OnInit {
  Visite : Visite = new Visite();

  constructor(private VisiteService: VisiteService) { }

  ngOnInit(): void {
  }
  createVisite(){
    console.log(this.Visite);
    this.VisiteService.addVisite(this.Visite).subscribe();

  }

}
