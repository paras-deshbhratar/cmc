import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatRadioChange, MatSnackBar, MatSort, MatSortable, MatTableDataSource } from '@angular/material';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-data-upload',
  templateUrl: './data-upload.component.html',
  styleUrls: ['./data-upload.component.scss']
})
export class DataUploadComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'uploadStartDate', 'uploadEndDate', 'status', 'userName'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  submitted = false;
  latestupload: string;
  selectedLabel: string
  uploadLabelValues: string[] = ['Report1 Data', 'Report2 Data', 'Report3 Data'];
  durationInSeconds = 5;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private snackBarService: SnackBarService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.sort(({ id: 'uploadStartDate', start: 'desc'}) as MatSortable);
    this.dataSource.sort = this.sort;
  }

  radioChange(event: MatRadioChange) {
    this.selectedLabel = event.value
  }

  action() {
    this.submitted = true;
    this.latestupload = this.selectedLabel;
    ELEMENT_DATA.push(
      { name: this.selectedLabel, uploadStartDate: (new Date()).toLocaleString(), uploadEndDate: '', status: 'Inprogress', userName: 'vsavath' }
    )
    this.dataSource.data = ELEMENT_DATA;
    this.alert();
  }

  alert() {
    var message = this.latestupload + " is submited, please check the latest status in the below table by clicking the Refresh button."
    this.snackBarService.openSnackBar(message,"OK");
  }

}

export interface UploadDataElement {
  name: string;
  uploadStartDate: string;
  uploadEndDate: string;
  status: string;
  userName: string;
}

const ELEMENT_DATA: UploadDataElement[] = [
  { name: 'Report1 Data', uploadStartDate: '06/15/19, 10:54:25 PM', uploadEndDate: '6/15/19, 11:54:25 PM', status: 'Completed', userName: 'vsavath' },
  { name: 'Report2 Data', uploadStartDate: '07/15/19, 10:54:25 PM', uploadEndDate: '', status: 'Inprogress', userName: 'vsavath' }
];

