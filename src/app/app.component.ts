import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { PokemonSearchFormComponent } from './pokemon-search-form/pokemon-search-form.component';

@Component({
    selector: 'app-root',
    imports: [PokemonSearchFormComponent, CommonModule, MatToolbarModule, MatCardModule, MatPaginatorModule, HttpClientModule, RouterModule, FormsModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule],
    templateUrl: './app.component.html',
    styleUrls: ['./custom-theme.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent{
    title: 'pokemonpedia'
}