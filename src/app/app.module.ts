import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GlobalNavBarComponent} from './component/global-nav-bar/global-nav-bar.component';
import {WelcomePortalContainerComponent} from './container/welcome-portal-container/welcome-portal-container.component';

import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GameCatalogComponent} from './component/game-catalog/game-catalog.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatOptionModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { GameSettingComponent } from './component/game-setting/game-setting.component';
import { LeaderBoardContainerComponent } from './container/leader-board-container/leader-board-container.component';
import {MatTableModule} from '@angular/material/table';
import { LeaderBoardTableComponent } from './component/leader-board-table/leader-board-table.component';
import { RobotGameContainerComponent } from './container/robot-game-container/robot-game-container.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavBarComponent,
    WelcomePortalContainerComponent,
    GameCatalogComponent,
    GameSettingComponent,
    LeaderBoardContainerComponent,
    LeaderBoardTableComponent,
    RobotGameContainerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: {color: 'accent'},
  },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
