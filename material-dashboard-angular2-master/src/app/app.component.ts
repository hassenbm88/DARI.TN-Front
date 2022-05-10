import { Component, OnInit} from '@angular/core';
import { Abonnement } from './model/abonnement';
import { HttpClient } from '@angular/common/http';
import { AbonnementService } from './abonnement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
 
  
  public listeAbonnement = [];
  
  public qrconent = "";
  public qrInfo;
  public test = 0;
 constructor(private service: AbonnementService, private http: HttpClient) {
   }
  ngOnInit(): void {
    this.getAbonnement();
  }
  /*public getAllAbonnement(){
    let myData = this.http.get<any>('http://localhost:8083/SpringMVC/Abonnement/retrieve-abonnement');
    return myData
    };*/
  getQrcode(){
  }
  getAbonnement() {
    this.service.getAllAbonnement2().subscribe(
      result => {
        this.listeAbonnement = result;
        let res = "";
         for(let n = 0; n <= result.length; n++){
          res = res + "amout : "+  result[n].amount + " total cost :  " + result[n].totalcost+" type abonnement : "+result[n].type_abonnement +"|";         
          if (n == result.length -1){
            this.qrInfo = res;
          }
        }      
        this.qrInfo = res;


        });
    
      }
  
  item = [{
    'moataz': 'Agatha Harkness',
    'played by': 'Kathryn Hahn',
    'Fictional universe': 'Marvel Universe',
    'Creator': 'Stan Lee'
  }]
  


}
