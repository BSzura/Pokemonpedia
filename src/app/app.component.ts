import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import {} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PokemonCard } from './pokemon-card/pokemon-card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatCardModule, PokemonCardComponent, PokemonListComponent, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
  templateUrl: './pokemon-list/pokemon-list.component.html',
  styleUrl: './custom-theme.scss'
})
export class AppComponent 

implements OnInit {

 pokemons: PokemonCard[];

 constructor(private httpClient: HttpClient) {}

 ngOnInit() {

   this.httpClient

     .get<any>("https://pokeapi.co/api/v2/pokemon")

     .subscribe(response => {

       this.pokemons = response.results;

     });

 }

}