import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/_services/auth.service';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-credentiels',
  templateUrl: './credentiels.component.html',
  styleUrls: ['./credentiels.component.scss']
})
export class CredentielsComponent implements OnInit {
  form: any = {
    profession:null,
    age:null
    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService,private token:TokenStorageService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { age ,profession} = this.form;
    this.authService.SecondRegister(this.token.getToken(),age,profession).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
