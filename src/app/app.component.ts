import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@Component({
    selector: 'app-root',
    imports: [CommonModule, MatToolbarModule, MatCardModule, MatPaginatorModule, HttpClientModule, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './custom-theme.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent{}