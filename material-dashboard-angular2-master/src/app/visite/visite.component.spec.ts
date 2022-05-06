import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { visiteComponent } from './visite.component';

describe('TypographyComponent', () => {
  let component: visiteComponent;
  let fixture: ComponentFixture<visiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ visiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(visiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
