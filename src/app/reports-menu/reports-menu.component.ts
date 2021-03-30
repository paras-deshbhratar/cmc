import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-reports-menu',
  templateUrl: './reports-menu.component.html',
  styleUrls: ['./reports-menu.component.scss']
})
export class ReportsMenuComponent implements OnInit {

  constructor(public navService: NavService) { }

  ngOnInit() {
  }

}
