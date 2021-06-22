import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotGameContainerComponent } from './robot-game-container.component';

describe('RobotGameContainerComponent', () => {
  let component: RobotGameContainerComponent;
  let fixture: ComponentFixture<RobotGameContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotGameContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotGameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
