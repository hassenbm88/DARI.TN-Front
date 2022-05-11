import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
//import { CreateComponent } from './create/create.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
/*import { AfficherComponent } from './afficher/afficher.component';*/
import { NgChartsModule } from 'ng2-charts';
//import { UsersChartComponent } from './users-chart/users-chart.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModerateurComponent } from './board-moderateur/board-moderateur.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { CredentielsComponent } from './credentiels/credentiels.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgChartsModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModerateurComponent,
    BoardUserComponent,
    ConfirmEmailComponent,
    CredentielsComponent,
   // UsersChartComponent,
   /* AfficherComponent,*/
    
   


  ],
  providers: [DatePipe],
 // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
