import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadiesDetailBottomSheet } from './cadies-detail.bottom-sheet';

describe('CadiesDetailBottomSheet', () => {
  let component: CadiesDetailBottomSheet;
  let fixture: ComponentFixture<CadiesDetailBottomSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadiesDetailBottomSheet ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadiesDetailBottomSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
