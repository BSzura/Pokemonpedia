import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Input } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { PokemonCard } from './pokemon-card.model';
import { HttpClient } from '@angular/common/http';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [MatCardModule, PokemonListComponent, CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './custom-theme.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class PokemonCardComponent 

implements OnInit {

 @Input()

 cardData: PokemonCard;

 pokemon: Pokemon;

 constructor(private httpClient: HttpClient) {}

 ngOnInit() {

   this.httpClient.get<any>(this.cardData.url)

     .subscribe(response => {

       this.pokemon = {

         name: response.name,

         type: response.types[0].type.name,

         imageUrl: response.sprites.front_default

       };

     });

   }

}