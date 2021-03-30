import {Component, OnInit} from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSelectChange} from "@angular/material/select";

interface Account {
  value: string;
  viewValue: string;
}

interface Environment {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  currentActiveForm: string;

  accounts: Account[] = [
    {value: 'none', viewValue: ' '},
    {value: 'domain', viewValue: 'Domain Account'},
    {value: 'application', viewValue: 'Application Account'},
    {value: 'database', viewValue: 'Database Account'}
  ];

  environments: Environment[] = [
    {value: 'none', viewValue: '        '},
    {value: 'Facets-570-DEVRpt', viewValue: 'Facets-570-DEVRpt'},
    {value: 'Facets-570-DEVRpt', viewValue: 'Facets-570-DEVRpt'},
    {value: 'Facets-570-DEVRpt', viewValue: 'Facets-570-DEVRpt'}
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onFormSelection(matSelectChange: MatSelectChange) {
    this.currentActiveForm = matSelectChange.value;
  }

  dbFormSubmit(dbForm: NgForm) {
    console.log(dbForm);
  }

  onSubmitDatabaseForm(databaseForm: NgForm) {
    console.log(databaseForm.value);
  }
}

