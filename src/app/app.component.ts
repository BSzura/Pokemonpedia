import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PokemonCard } from './pokemon-card/pokemon-card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatCardModule, PokemonCardComponent, PokemonListComponent, HttpClientModule],
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