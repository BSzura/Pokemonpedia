import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsCardComponent } from './pokemon-details-card/pokemon-details-card.component';

export async function getPrerenderParams() {
  return [
    PokemonListComponent
    // Dodaj inne nazwy Pokémonów
  ];
}

export const routes: Routes = [

    { path: "pokemons", component: PokemonListComponent },
   
    { path: "", redirectTo: "pokemons", pathMatch: "full" },
   
    {
   
      path: "pokemons/details/:pokemonName",
   
      component: PokemonDetailsCardComponent
   
    },
   
    { path: "**", redirectTo: "pokemons", pathMatch: "full" }
   
   ];
