import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

import { TableListComponent } from '../../table-list/table-list.component';
import { visiteComponent } from '../../visite/visite.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CreateComponent } from 'app/create/create.component';
import { CreatevisiteComponent } from 'app/createvisite/createvisite.component';
import {AgentComponent} from "../../agent/agent.component";
import {ReglementComponent} from "../../reglement/reglement.component";


export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'visite',     component: visiteComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'reglement',        component: ReglementComponent },
    { path: 'create',        component: CreateComponent },
    { path: 'agent',        component: AgentComponent },
    { path: 'createvisite',        component: CreatevisiteComponent },
];
