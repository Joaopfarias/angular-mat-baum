import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryContainer } from './entry.container';

describe('EntryContainer', () => {
  let component: EntryContainer;
  let fixture: ComponentFixture<EntryContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
