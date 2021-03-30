import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RestApiService } from '../services/rest-api.service';
import { Search } from './search.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  searchForm: FormGroup;
  content: any;
  step = 0;
  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;
  dataSource: any;
  snackBar: any;
  enableReport: boolean;

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private restApiService: RestApiService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      id: [''],
      startDate: [''],
      endDate: ['']
    });
    this.showLoader(false);
    this.enableReport = false;
  }

  generateReport() {
    document.getElementById("commonLoader").style.display = 'block';
    this.enableReport = true;
    let searchObj = new Search(this.f.id.value, this.convertDate(this.f.startDate.value),
      this.convertDate(this.f.endDate.value));
    this.generateReportApi(searchObj);
  }

  // convenience getter for easy access to form fields
  get f() { return this.searchForm.controls; }

  private convertDate(dateString: string) {
    if (dateString == "" || dateString == null) {
      return "";
    }
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/' + year;
  }

  setStep(index: number) {
    this.step = index;
  }

  private generateReportApi(searchObject: Search) {
    this.restApiService.generateReport().subscribe(
      data => {
        this.content = new Blob([data]);
        this.showLoader(false);
      },
      error => {
        this.showLoader(false);
      }
    );
  }

  showLoader(flag: boolean) {
    const commonLoader = document.getElementById("commonLoader");
    if (commonLoader != null) {
      if (flag) {
        commonLoader.style.display = 'block';
      } else {
        commonLoader.style.display = 'none';
      }
    }
  }

}
