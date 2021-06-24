import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {environment} from '../../environments/environment';
import {LeaderBoardFacade} from '../store/leader-board/facade/leader-board.facade';
import {ArcadePlayerProfile} from '../../openapi/codegen/game-arcade/models/arcade-player-profile';
import {AppRoute} from '../constant/app-route';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private isStoreReady = false;

  constructor(private router: Router,
              private leaderBoardFacade: LeaderBoardFacade) {
    this.leaderBoardFacade.playerProfile
      .subscribe((profile: ArcadePlayerProfile) => {
        this.isStoreReady = !!profile;
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === `/${AppRoute.ROBOT_GAME}`) {
      if (this.isStoreReady) {
        return true;
      }
      this.router.navigate([AppRoute.HOME]);
      return false;
    }
  }

}
