import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSidenavComponent } from './reports-sidenav.component';

describe('ReportsSidenavComponent', () => {
  let component: ReportsSidenavComponent;
  let fixture: ComponentFixture<ReportsSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
