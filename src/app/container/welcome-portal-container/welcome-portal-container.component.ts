import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validLength} from '../../validator/length.validator';
import {validEmail} from '../../validator/email.validator';
import {Router} from '@angular/router';
import {AppRoute} from '../../constant/app-route';
import {LeaderBoardFacade} from '../../store/leader-board/facade/leader-board.facade';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'sg-app-welcome-portal-container',
  templateUrl: './welcome-portal-container.component.html',
  styleUrls: ['./welcome-portal-container.component.scss']
})
export class WelcomePortalContainerComponent implements OnInit {
  gameCatalogFormGroup: FormGroup;
  gameSettingFormGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private leaderBoardFacade: LeaderBoardFacade,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Welcome');
    this.initGameCatalogFormGroup();
    this.initGameSettingFormGroup();
  }

  launchGame(): void {
    this.updatePlayer();
    switch (this.gameCatalogFormGroup.get('game').value) {
      // todo support more games
      case 'ROBOT':
        this.router.navigate([AppRoute.ROBOT_GAME]);
        return;
      default:
        return;
    }
  }

  private updatePlayer(): void {
    this.leaderBoardFacade.updatePlayerProfile({
      name: this.gameSettingFormGroup.get('name').value,
      email: this.gameSettingFormGroup.get('email').value
    });
  }

  initGameCatalogFormGroup(): void {
    this.gameCatalogFormGroup = this.fb.group({
      game: ['', Validators.required]
    }, {updateOn: 'change'});
  }

  initGameSettingFormGroup(): void {
    this.gameSettingFormGroup = this.fb.group({
      name: ['', [Validators.required, validLength(3, 16)]],
      email: ['', [Validators.required, validEmail]],
    }, {updateOn: 'change'});
  }

  goToLeaderBoard(): void {
    this.router.navigate([AppRoute.LEADER_BOARD]);
  }
}
