import {Component, Input, OnInit} from '@angular/core';
import {ArcadeGame} from '../../constant/interface';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'sg-app-game-catalog',
  templateUrl: './game-catalog.component.html',
  styleUrls: ['./game-catalog.component.scss']
})
export class GameCatalogComponent implements OnInit {

  @Input()
  formGroup: FormGroup;

  // todo: refactor to fetch from backend API
  gameList: ArcadeGame[] = [
    {title: 'Robot Game', value: 'ROBOT', isDisabled: false},
    {title: 'Battle Field 2042', value: 'BF', isDisabled: true},
    {title: 'Cyberpunk 1988', value: 'CP', isDisabled: true}
  ];

  constructor() {
  }

  get gameFormControl(): AbstractControl {
    return this.formGroup.get('game');
  }

  ngOnInit(): void {
  }
}
