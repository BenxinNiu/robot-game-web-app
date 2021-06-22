import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppRoute} from './constant/app-route';
import {WelcomePortalContainerComponent} from './container/welcome-portal-container/welcome-portal-container.component';
import {LeaderBoardContainerComponent} from './container/leader-board-container/leader-board-container.component';

const routes: Routes = [
  {path: AppRoute.HOME, component: WelcomePortalContainerComponent},
  {path: AppRoute.LEADER_BOARD, component: LeaderBoardContainerComponent},
  {path: '**', redirectTo: AppRoute.HOME}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
