import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipebook/recipes/recipes.component';
import { RecipeBookComponent } from './recipebook/recipebook.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditListComponent } from './shopping-list/edit-shopping/edit-shopping.component';
import { RecipeComponent } from './recipebook/recipe/recipe.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipesService } from './services/recipes.service';
import { ShoppingService } from './services/shopping.service';
import { AppDropdownDirective } from './recipebook/directives/dropdown.directive';
import { AppRouterModule } from './router.module';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipeBookComponent,
    ShoppingListComponent,
    EditListComponent,
    AppDropdownDirective,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [RecipesService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
