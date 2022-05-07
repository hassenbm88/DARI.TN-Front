import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CreateComponent } from 'app/create/create.component';
import { CreatevisiteComponent } from 'app/createvisite/createvisite.component';
import { AgentComponent } from './agent/agent.component';
import { ReglementComponent } from './reglement/reglement.component';
import { AddAideComponent } from 'app/add-aide/add-aide.component';
import { AideComponent } from 'app/aide/aide.component';
import { UpdateAideComponent } from 'app/update-aide/update-aide.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { AddReportComponent } from './add-report/add-report.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CreateComponent,
    CreatevisiteComponent,
    AgentComponent,
    ReglementComponent,
    AideComponent,
    UpdateAideComponent,
    AddAideComponent,
    ReportComponent,
    AddReportComponent,
    UpdateReportComponent,
    

    
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
