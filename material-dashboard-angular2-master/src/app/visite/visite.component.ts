import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisiteService } from 'app/Visite.service';
import { Visite } from 'app/model/Visite';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class visiteComponent implements OnInit {

  constructor(private VisiteService:VisiteService,private router: Router) { }
  Visite : Observable<Visite[]>;
    ngOnInit() {
    this.VisiteService.getVisite();
    this.Visite = this.VisiteService.getVisite();
  }
  removeVisite(idVisite: number){
    console.log(idVisite);
    this.VisiteService.removeVisite(idVisite).subscribe(
      data => {
        this.router.navigate(['/Visite']);
        console.log(data);
        this.VisiteService.getVisite();
      },
      error => console.log(error));
     
};

  }

