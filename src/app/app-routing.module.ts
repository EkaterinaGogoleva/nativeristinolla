import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'
import {GameComponent} from "./game/game.component";
const routes: Routes = [
  {path: "", redirectTo: "/game", pathMatch: "full" },
  {path: "game", component: GameComponent}
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
