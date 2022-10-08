import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuicesContainer } from './juices.container';

describe('JuicesContainer', () => {
  let component: JuicesContainer;
  let fixture: ComponentFixture<JuicesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuicesContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuicesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
