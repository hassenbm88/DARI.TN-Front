import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropretyService } from 'app/Proprety.service';
import { Proprety } from 'app/model/Proprety';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private PropretyService:PropretyService,private router: Router) { }
  Proprety: Observable<Proprety[]>;
    ngOnInit() {
    this.PropretyService.getProprety();
    this.Proprety = this.PropretyService.getProprety();
  }
  removeProprety(idProprety: number){
    console.log(idProprety);
    this.PropretyService.removeProprety(idProprety).subscribe(
      data => {
        this.router.navigate(['/table-list']);
        console.log(data);
        this.PropretyService.getProprety();
      },
      error => console.log(error));
     
};

  }

