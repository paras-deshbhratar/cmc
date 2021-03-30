import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavItem } from '../model/nav-item';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-reports-sidenav',
  templateUrl: './reports-sidenav.component.html',
  styleUrls: ['./reports-sidenav.component.scss']
})
export class ReportsSidenavComponent implements AfterViewInit {

  @ViewChild('appDrawer', { static: true }) appDrawer: ElementRef;

  title = 'CMC-Reports';

  constructor(private navService: NavService) {
  }

  navItems: NavItem[] = [
    {
      displayName: 'Upload Reports Data',
      iconName: 'recent_actors',
      route: 'uploaddata',
    },
    {
      displayName: 'Scorecard',
      iconName: 'recent_actors',
      route: 'Scorecard',
      children: [
        {
          displayName: 'NTWK Ext Cases Created',
          iconName: 'recent_actors',
          route: 'Scorecard/report1',
        },
        {
          displayName: 'MTP Cases',
          iconName: 'recent_actors',
          route: 'Scorecard/report2',
        },
        {
          displayName: 'NTWK Cases Transplanted',
          iconName: 'recent_actors',
          route: 'Scorecard/report3',
        },
        {
          displayName: 'Open Cases',
          iconName: 'recent_actors',
          route: 'Scorecard/report3',
        }
      ]
    },
    {
      displayName: 'Client Claim Service',
      iconName: 'recent_actors',
      route: 'ClientClaimService',
      children: [
        {
          displayName: 'Report1',
          iconName: 'recent_actors',
          route: 'ClientClaimService/report1',
        },
        {
          displayName: 'Report2',
          iconName: 'recent_actors',
          route: 'ClientClaimService/report2',
        },
        {
          displayName: 'Report3',
          iconName: 'recent_actors',
          route: 'ClientClaimService/report3',
        }
      ]
    },
    {
      displayName: 'GenericReport',
      iconName: 'recent_actors',
      route: 'genericReport',
    }
  ];

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
