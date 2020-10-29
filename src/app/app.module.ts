import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import * as fromBoard from './states/board.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BoardEffects } from './states/board.effects';

@NgModule({
  declarations: [AppComponent, BoardComponent, CardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromBoard.boardFeatureKey, fromBoard.reducer),
    EffectsModule.forFeature([BoardEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
