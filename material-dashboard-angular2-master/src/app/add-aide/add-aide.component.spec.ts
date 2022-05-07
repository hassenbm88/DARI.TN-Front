import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAideComponent } from './add-aide.component';

describe('AddAideComponent', () => {
  let component: AddAideComponent;
  let fixture: ComponentFixture<AddAideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
