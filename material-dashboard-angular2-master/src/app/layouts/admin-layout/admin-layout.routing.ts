import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { VisiteComponent } from '../../visite/visite.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CreateComponent } from 'app/create/create.component';
import { CreatevisiteComponent } from 'app/createvisite/createvisite.component';
import {AgentComponent} from '../../agent/agent.component';
import {ReglementComponent} from '../../reglement/reglement.component';
import { AddAideComponent } from 'app/add-aide/add-aide.component';
import { AideComponent } from 'app/aide/aide.component';
import { UpdateAideComponent } from 'app/update-aide/update-aide.component';
import { ReportComponent } from 'app/report/report.component';
import { UpdateReportComponent } from 'app/update-report/update-report.component';
import { AddReportComponent } from 'app/add-report/add-report.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'visite',     component: VisiteComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'reglement',        component: ReglementComponent },
    { path: 'create',        component: CreateComponent },
    { path: 'agent',        component: AgentComponent },
    { path: 'createvisite',        component: CreatevisiteComponent },
    {path: 'aide', component: AideComponent},
    {path: 'update-aide/:id', component: UpdateAideComponent},
    {path: 'add-aide', component: AddAideComponent},
    {path: 'report', component: ReportComponent},
    {path: 'update-report/:id', component: UpdateReportComponent},
    {path: 'add-report', component: AddReportComponent},
];
