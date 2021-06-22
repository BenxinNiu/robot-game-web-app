import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validLength} from '../../validator/length.validator';
import {validEmail} from '../../validator/email.validator';
import {Router} from '@angular/router';
import {AppRoute} from '../../constant/app-route';

@Component({
  selector: 'sg-app-welcome-portal-container',
  templateUrl: './welcome-portal-container.component.html',
  styleUrls: ['./welcome-portal-container.component.scss']
})
export class WelcomePortalContainerComponent implements OnInit {
  isLinear = false;
  gameCatalogFormGroup: FormGroup;
  gameSettingFormGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.gameCatalogFormGroup = this.fb.group({
      game: ['', Validators.required]
    }, {updateOn: 'change'});

    this.gameSettingFormGroup = this.fb.group({
      name: ['', [Validators.required, validLength(3, 16)]],
      email: ['', [Validators.required, validEmail]],
    }, {updateOn: 'change'});
  }

  test(): void {
    console.log(this.gameCatalogFormGroup.value);
  }

  goToLeaderBoard(): void {
    this.router.navigate([AppRoute.LEADER_BOARD]);
  }
}