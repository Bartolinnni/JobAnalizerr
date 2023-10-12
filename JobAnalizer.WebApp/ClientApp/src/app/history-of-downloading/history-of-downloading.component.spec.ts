import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfDownloadingComponent } from './history-of-downloading.component';

describe('HistoryOfDownloadingComponent', () => {
  let component: HistoryOfDownloadingComponent;
  let fixture: ComponentFixture<HistoryOfDownloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOfDownloadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryOfDownloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
