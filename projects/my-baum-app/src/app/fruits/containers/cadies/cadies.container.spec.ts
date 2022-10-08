import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadiesContainer } from './cadies.container';

describe('CadiesContainer', () => {
  let component: CadiesContainer;
  let fixture: ComponentFixture<CadiesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadiesContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadiesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
