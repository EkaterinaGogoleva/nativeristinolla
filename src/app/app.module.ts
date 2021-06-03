import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {GameComponent} from "./game/game.component";
import {SquareComponent} from "./square/square.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent,
  GameComponent,
SquareComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
