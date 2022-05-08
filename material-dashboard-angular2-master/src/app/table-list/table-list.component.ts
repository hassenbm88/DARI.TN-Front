import { Component, OnInit } from '@angular/core';
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

  public property!: Proprety;
  public ListProperty: Proprety[];
  SearchVal = '';
  Property: Observable<Proprety[]>;

  constructor(private propretyService: PropretyService, private router: Router) { }
  ngOnInit() {
    this.getProperty()

  }
  removeProprety(idProprety: number) {
    console.log(idProprety);
    this.propretyService.removeProprety(idProprety).subscribe(
        data => {
          this.router.navigate(['/table-list']);
          console.log(data);
          this.propretyService.getProprety();
        },
        error => console.log(error));

  }
  Search() {
    // tslint:disable-next-line:triple-equals
    if (this.SearchVal == '') {
      this.getProperty();

    } else {
      this.propretyService.retrievePropretysByName(this.SearchVal).subscribe((data: any) => {
        console.log('searchdata', data)
        this.ListProperty = data
      })
    }
  }

// public getProperty(): void {
//   this.PropretyService.getProprety().subscribe(
//       (response: Proprety[]) => {
//         this.ListProperty = response;
//         console.log(this.ListProperty);
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//   );
// }

  public getProperty(): void {
    this.propretyService.getProprety();
    this.Property = this.propretyService.getProprety();
    this.propretyService.getProprety().subscribe((data: any) => {
      console.log('data', data)
      this.ListProperty = data
    })


  }

}

