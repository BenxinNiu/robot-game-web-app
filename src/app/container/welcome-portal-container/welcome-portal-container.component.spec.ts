import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePortalContainerComponent } from './welcome-portal-container.component';

describe('WelcomePortalContainerComponent', () => {
  let component: WelcomePortalContainerComponent;
  let fixture: ComponentFixture<WelcomePortalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePortalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePortalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
