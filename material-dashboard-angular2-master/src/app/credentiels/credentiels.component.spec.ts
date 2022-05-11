import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentielsComponent } from './credentiels.component';

describe('CredentielsComponent', () => {
  let component: CredentielsComponent;
  let fixture: ComponentFixture<CredentielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
