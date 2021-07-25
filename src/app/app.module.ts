import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MealComponent } from './meal/meal.component';
import { CategoriesComponent } from './categories/categories.component';
import { IngredientsComponent } from './ingredients/ingredients.component';


@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'meal/:id', component: MealComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'ingredients', component: IngredientsComponent },
      { path: '**', component: PageNotFoundComponent },
    ], {
      onSameUrlNavigation: 'reload'
    })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    DashboardComponent,
    MenuBarComponent,
    PageNotFoundComponent,
    MealComponent,
    CategoriesComponent,
    IngredientsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
