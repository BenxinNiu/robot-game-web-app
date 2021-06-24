import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotGameBoardComponent } from './robot-game-board.component';

describe('RobotGameBoardComponent', () => {
  let component: RobotGameBoardComponent;
  let fixture: ComponentFixture<RobotGameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotGameBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotGameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
