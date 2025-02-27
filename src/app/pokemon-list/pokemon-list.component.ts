import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card.model';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-pokemon-list',
    imports: [CommonModule, MatCardModule, PokemonCardComponent, MatPaginator, HttpClientModule],
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PokemonListComponent 

implements OnInit {

 pokemons: PokemonCard[];

 pokemonsCount: number;

 constructor(private httpClient: HttpClient) {}

 ngOnInit() {

   this.httpClient

     .get<any>("https://pokeapi.co/api/v2/pokemon")

     .subscribe(response => {

       this.pokemons = response.results;

       this.pokemonsCount = response.count;

     });

 }

 goToPage(page: PageEvent) {

   this.httpClient

     .get<any>(

       "https://pokeapi.co/api/v2/pokemon?offset=" +

         page.pageIndex * 20 +

         "&limit=20"

     )

     .subscribe(response => {

       this.pokemons = response.results;

     });

 }

}