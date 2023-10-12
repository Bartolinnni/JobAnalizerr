import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDownloadingComponent } from './data-downloading.component';

describe('DataDownloadingComponent', () => {
  let component: DataDownloadingComponent;
  let fixture: ComponentFixture<DataDownloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDownloadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDownloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
