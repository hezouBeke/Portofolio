import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [

    { path: '',   redirectTo : 'dashboard' , component: DashboardComponent }, 

];
