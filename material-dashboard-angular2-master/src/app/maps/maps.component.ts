import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  title = 'angular8phpmyadmindatabse';
  data = [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/abonnement.php').subscribe(data => {
    this.data = data[0];
    console.log(this.data);
   
    
    }, error => console.error(error));
  }
}