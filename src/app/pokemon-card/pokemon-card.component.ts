import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Input } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { PokemonCard } from './pokemon-card.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-pokemon-card',
    imports: [MatCardModule, CommonModule, RouterModule],
    templateUrl: './pokemon-card.component.html',
    styleUrl: './custom-theme.scss',
})
export class PokemonCardComponent 

implements OnInit {

 @Input()

 cardData: PokemonCard;

 pokemon: Pokemon;

 defaultImageSrc = "../../assets/pokeball.png";

constructor(private httpClient: HttpClient) {}
ngOnInit() {

  this.httpClient.get<any>(this.cardData.url)

      .subscribe(response => {

        this.pokemon = {

        name: response.name,

        type: response.types[0].type.name,

        polishType: 

this.translateTypeName(response.types[0].type.name),

      imageUrl: response.sprites.front_default

    };

  });

}
   translateTypeName(type: string): string {

    switch (type) {
 
      case "normal":
 
        return "normalny";
 
      case "fire":
 
        return "ognisty";
 
      case "water":
 
        return "wodnisty";
 
      case "electric":
 
        return "elektryczny";
 
      case "grass":
 
        return "trawiasty";
 
      case "ice":
 
        return "lodowy";
 
      case "fighting":
 
        return "walczący";
 
      case "poison":
 
        return "trujący";
 
      case "ground":
 
        return "ziemnisty";
 
      case "flying":
 
        return "latający";
 
      case "psychic":
 
        return "psychiczny";
 
      case "bug":
 
        return "robak";
 
      case "rock":
 
        return "skalny";
 
      case "ghost":
 
        return "duch";
 
      case "dragon":
 
        return "smok";
 
      case "dark":
 
        return "mrok";
 
      case "steel":
 
        return "stalowy";
 
      case "fairy":
 
        return "baśniowy";
 
      default:
 
        return "typ nieobsługiwany";
 
    }
 
  }
}

