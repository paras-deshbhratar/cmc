import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataUploadComponent } from './data-upload/data-upload.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './login-form/auth.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReportComponent } from './report/report.component';
import { ReportsSidenavComponent } from './reports-sidenav/reports-sidenav.component';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'reports/dataupload', component: DataUploadComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'uploaddata', component: DataUploadComponent },
  {
    path: 'Scorecard', children: [
      { path: 'report1', component: ReportComponent },
      { path: 'report2', component: ReportComponent },
      { path: 'report3', component: ReportComponent },
    ]
  },
  {
    path: 'ClientClaimService', children: [
      { path: 'report1', component: ReportComponent },
      { path: 'report2', component: ReportComponent },
      { path: 'report3', component: ReportComponent },
    ]
  },
  { path: 'genericReport', component: ReportComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
