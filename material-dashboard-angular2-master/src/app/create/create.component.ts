import { Component, OnInit } from '@angular/core';
import { Proprety } from 'app/model/Proprety';
import { PropretyService } from 'app/Proprety.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  Proprety : Proprety = new Proprety();
  selectedtype : string = '';
  selectedoffre : string = '';


  constructor(private PropretyService: PropretyService) { }
  ngOnInit(): void {
  }
  create(){
    console.log(this.Proprety);
    this.PropretyService.addProperty(this.Proprety).subscribe();

  }

}

