import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-pokemon-search-form',
  imports: [MatFormField, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './pokemon-search-form.component.html',
  styleUrl: './pokemon-search-form.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PokemonSearchFormComponent implements OnInit {
  pokemonName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  searchPokemon() {
    if (this.pokemonName) {
      this.router.navigate([
        'pokemons',
        'details',
        this.pokemonName.toLowerCase()
      ]);
    }
  }
}