import { Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonCard } from '../pokemon-card/pokemon-card.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent 

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