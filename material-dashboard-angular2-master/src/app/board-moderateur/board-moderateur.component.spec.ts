import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardModerateurComponent } from './board-moderateur.component';

describe('BoardModerateurComponent', () => {
  let component: BoardModerateurComponent;
  let fixture: ComponentFixture<BoardModerateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardModerateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardModerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
