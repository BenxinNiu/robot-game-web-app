import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardContainerComponent } from './leader-board-container.component';

describe('LeaderBoardContainerComponent', () => {
  let component: LeaderBoardContainerComponent;
  let fixture: ComponentFixture<LeaderBoardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderBoardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
