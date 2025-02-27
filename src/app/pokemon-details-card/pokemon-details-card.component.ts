import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon-card/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-details-card',
  imports: [MatCardModule, HttpClientModule, CommonModule],
  templateUrl: './pokemon-details-card.component.html',
  styleUrl: './pokemon-details-card.component.css'
})

export class PokemonDetailsCardComponent 

implements OnInit {

 pokemonExists: boolean;

 pokemon: Pokemon;

 inputPokemonName: string;

 defaultImageSrc = "../../assets/pokeball.png";

 constructor(

   private activatedRoute: ActivatedRoute,

   private httpClient: HttpClient

 ) {}

 ngOnInit() {

   this.activatedRoute.params.subscribe(params => {

     this.httpClient

       .get<any>("https://pokeapi.co/api/v2/pokemon/" + params['pokemonName'])

       .subscribe(

         pokemonData => {

           this.pokemonExists = true;

           this.pokemon = {

             name: pokemonData.name,

             type: pokemonData.types[0].type.name,

             imageUrl: pokemonData.sprites.front_default,

             stats: pokemonData.stats.map((stat: { stat: { name: any; }; base_stat: any; }) => {

               return {

                 name: stat.stat.name,

                 value: stat.base_stat

               };

             })

           };

         },

         error => {

           this.pokemonExists = false;

           this.inputPokemonName = params['pokemonName'];

         }

       );

   });

 }

}