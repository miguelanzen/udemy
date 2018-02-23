
import { NgModule } from '@angular/core/';
import { Route, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipebook/recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';

const routes: Route[] = [
    {path: '', redirectTo: 'recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: NewRecipeComponent},
        {path: 'recipe/:id', component: RecipeDetailComponent, pathMatch: 'full'},
        {path: 'recipe/:editId/edit', component: NewRecipeComponent, pathMatch: 'full'}
    ]},
    {path: 'shopping', component: ShoppingListComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouterModule {

}
