import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
//import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { BoardUserComponent } from 'app/board-user/board-user.component';
import { BoardModerateurComponent } from 'app/board-moderateur/board-moderateur.component';
import { BoardAdminComponent } from 'app/board-admin/board-admin.component';
import { AuthGuardService } from 'app/auth-guard.service';
import { IsSignedInGuard } from 'app/is-signed-in-guard.service';
import { CredentielsComponent } from 'app/credentiels/credentiels.component';
//import { CreateComponent } from 'app/create/create.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

    //,canActivate: [AuthGuardService,IsSignedInGuard],data:{Authority:['ROLE_ADMIN']}
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent},
    //{ path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent , canActivate: [AuthGuardService,IsSignedInGuard],data:{Authority:['ROLE_ADMIN']}},
    { path: 'icons',          component: IconsComponent , canActivate: [AuthGuardService,IsSignedInGuard],data:{Authority:['ROLE_ADMIN']}},
    { path: 'maps',           component: MapsComponent , canActivate: [AuthGuardService,IsSignedInGuard],data:{Authority:['ROLE_ADMIN']}},
    { path: 'notifications',  component: NotificationsComponent , canActivate: [AuthGuardService,IsSignedInGuard],data:{Authority:['ROLE_ADMIN']}},
    { path: 'upgrade',        component: UpgradeComponent , canActivate: [AuthGuardService,IsSignedInGuard],data:{Authority:['ROLE_ADMIN']}},
    { path: 'home', component: HomeComponent , canActivate: [AuthGuardService,IsSignedInGuard],data:{Authority:['ROLE_ADMIN']}},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent  },
  { path: 'credentials', component: CredentielsComponent ,canActivate:[AuthGuardService,IsSignedInGuard],data:{Authority:['ROLE_USER','ROLE_ADMIN']}},
  { path: 'profile', component: ProfileComponent},
  { path: 'user', component: BoardUserComponent ,canActivate:[AuthGuardService,IsSignedInGuard],data:{Authority:['ROLE_USER','ROLE_ADMIN']}},
  { path: 'mod', component: BoardModerateurComponent },
  { path: 'admin', component: BoardAdminComponent },
  

    //{ path: 'create',        component: CreateComponent },
];
