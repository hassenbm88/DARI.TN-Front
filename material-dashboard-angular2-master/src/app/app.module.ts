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

    

    
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
