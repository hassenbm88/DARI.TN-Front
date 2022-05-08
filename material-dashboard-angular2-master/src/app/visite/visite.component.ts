import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisiteService } from 'app/Visite.service';
import { Visite } from 'app/model/Visite';
import { Proprety } from 'app/model/Proprety';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent implements OnInit {
    Visite: Observable<Visite[]>;
    Proprety: Proprety[];
    selected = 'dumpling';

  constructor(private visiteService: VisiteService , private router: Router) { }

  ngOnInit() {
    this.visiteService.getVisite();
    this.Visite = this.visiteService.getVisite();
  }
  removeVisite(idVisite: number) {
    console.log(idVisite);
    this.visiteService.removeVisite(idVisite).subscribe(
        data => {
          this.router.navigate(['/Visite']);
          console.log(data);
          this.visiteService.getVisite();
        },
        error => console.log(error));

  };

}
