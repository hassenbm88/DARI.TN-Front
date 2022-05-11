import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //chatbot 
  message:String="";
  reponse:String;
  received:String[]=[];
  sent:String[]=[];
  messages:String[][]=[];
  //end chatbot 
  accountStatus:String="";
  currentUser: any;
  userdetails:any;
  constructor(private token: TokenStorageService,private userservice:UserService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.token);
    this.userservice.getUser(this.currentUser.username).subscribe(data=>{
      this.userdetails=data;
    });
   
  }

  public chat()
  {
    this.userservice.chatbot(this.message).subscribe(data =>{
      this.reponse=data;
      this.sent.push(data);
      var newDat:String;
      newDat=this.message;
      this.received.push(newDat);
      this.messages.push([this.reponse,newDat]);
    })
  }

}