import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipebook/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {

    public selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            1,
            'Strawberries and Cream',
            'Mix everything an eat it',
            'https://picsum.photos/6858/4574?image=1080',
            [
                new Ingredient('Strawberries', 20),
                new Ingredient('Cream', 1)
            ]
        ),
        new Recipe(
            2,
            'Another recipe here',
            'There is a lot to do',
            'https://picsum.photos/5472/3648?image=835',
            [
                new Ingredient('Another Ingredient', 5),
                new Ingredient('Yet another ingredient', 3)
            ]
        ),
    ];

    getRecipes() {
        // prevent direct access to the recipes array
        return this.recipes.slice();
    }

    getRecipe(id: number): Recipe {
        for ( const recipe of this.recipes ) {
            if ( id === recipe.id ) {
                return recipe;
            }
        }
    }

}
