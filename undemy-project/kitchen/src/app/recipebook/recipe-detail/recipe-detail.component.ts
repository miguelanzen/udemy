import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../services/recipes.service';
import { ShoppingService } from '../../services/shopping.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    constructor(
        private recipesService: RecipesService,
        private shoppingService: ShoppingService,
        private currentPath: ActivatedRoute
    ) {}

    selectedRecipe: Recipe;

    ngOnInit() {
        this.currentPath.params.subscribe( params => {
            this.selectedRecipe = this.recipesService.getRecipe(parseInt(params['id'], 10));
        });
    }

    shopIngredients(ingredientsToShop: Ingredient[]) {
        this.shoppingService.ingredients.push(...ingredientsToShop);
        this.shoppingService.ingredientsUpdated.emit(this.shoppingService.ingredients.slice());
    }

}

