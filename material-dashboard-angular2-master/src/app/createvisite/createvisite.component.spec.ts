import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevisiteComponent } from './createvisite.component';

describe('CreatevisiteComponent', () => {
  let component: CreatevisiteComponent;
  let fixture: ComponentFixture<CreatevisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
