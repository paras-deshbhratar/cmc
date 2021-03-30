import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ErrorInterceptor } from './login-form/error.interceptor';
import { JwtInterceptor } from './login-form/jwt.interceptor';
import { LoginFormComponent } from './login-form/login-form.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { ReportComponent } from './report/report.component';
import { ReportsMenuComponent } from './reports-menu/reports-menu.component';
import { ReportsSidenavComponent } from './reports-sidenav/reports-sidenav.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DataUploadComponent } from './data-upload/data-upload.component';
import { HomePageComponent } from './home-page/home-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    ReportsMenuComponent,
    MenuListItemComponent,
    ReportComponent,
    ReportsSidenavComponent,
    PdfViewerComponent,
    DataUploadComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    NgxExtendedPdfViewerModule,
    MatRadioModule,
    MatSelectModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
