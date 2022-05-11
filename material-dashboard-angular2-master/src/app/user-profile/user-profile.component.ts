import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { UserService } from 'app/User.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Chart} from 'chart.js';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    constructor(private UserService:UserService,private router: Router,public datepipe: DatePipe,private httpClient: HttpClient) { }
    User : User[]=[];
    UserLess : number;
    UserGreat:number;
    UserProf : User[]=[];
    UserProf1 : User[]=[];
    Userautre : User[]=[];
    EtudProf : Observable<User[]>;
    user : User[];
    myDate = new Date();
    
    SearchVal:string='';

 
  currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  
  
    

       ngOnInit():void {

        this.UserService.findEventByAgeL(18).subscribe((res) => {
          this.UserLess= res.length;
        });
        this.UserService.findEventByAgeG(18).subscribe((res) => {
          this.UserGreat= res.length;
          const myChart = new Chart("myChart", {
            type: 'doughnut',
            data: {
                labels: ['-18', '+18'],
                datasets: [{
                    label: '# Users',
                    data: [this.UserLess, this.UserGreat],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        });

        

        console.log("this",this.user);
     
        console.log("f",);
        // this.UserService.getUser().subscribe((data: User[])=>{
        //   this.user = data;
        //   console.log(this.user);
        // })  
        this.getUser();
      console.log(this.UserProf);
      console.log("thisuser",this.User);
      this.getByProf();
      this.getByProf1();
      this.getByProf2();
    }
   

    // deleteUser(email: string){
    //   console.log(email);
    //   this.UserService.deleteUser(email).subscribe(
    //     data => {
    //       //this.router.navigate(['/user-profile']);
    //       console.log(data);
    //       this.getUser()
    //     },
    //     error => console.log(error));
       
    //     };


    deleteUser(id:any){
      this.UserService.deleteUser(id).subscribe(()=>
      this.getUser()
      );
    }

  getByProf(){
    var profession = "ETUDIANT";
    return this.UserService.getByProfession(profession).subscribe((data:User[])=>{
      this.UserProf=data;
    });
     }
     getUser(){
      
      return this.UserService.getUser().subscribe((data:User[])=>{
        this.User=data;
      });
       }
       getByProf1(){
        var profession = "ARTISTE";
        return this.UserService.getByProfession(profession).subscribe((data:User[])=>{
          this.UserProf1=data;
        });
         }
         getByProf2(){
          var profession = "AUTRES";
          return this.UserService.getByProfession(profession).subscribe((data:User[])=>{
            this.Userautre=data;
          });
           }



           Search() {
            if (this.SearchVal === '') {
              this.getUser();
            } else {
              this.UserService.finfEventByName(this.SearchVal).subscribe((res) => {
                this.User= res;
              });
            }
          }
    }

  
