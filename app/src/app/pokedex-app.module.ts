import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from "./pokedex-app.component";
import { PokemonService } from "./services/pokemon.services";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    PokemonService,
    provideHttpClient()
  ],
  declarations: [
    PokedexAppComponent,
  ],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
