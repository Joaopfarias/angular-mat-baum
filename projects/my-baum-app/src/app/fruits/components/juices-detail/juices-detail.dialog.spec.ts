import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuicesDetailDialog } from './juices-detail.dialog';

describe('JuicesDetailDialog', () => {
  let component: JuicesDetailDialog;
  let fixture: ComponentFixture<JuicesDetailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuicesDetailDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuicesDetailDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
