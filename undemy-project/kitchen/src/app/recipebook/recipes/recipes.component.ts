import { Component, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeComponent } from '../recipe/recipe.component';
import { RecipesService } from '../../services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

    constructor(
        private recipesService: RecipesService,
        private router: Router,
        private currentPath: ActivatedRoute
    ) {}

    recipes: Recipe[];

    selectRecipe(recipe: Recipe){
        this.recipesService.selectedRecipe.emit(recipe);
    }

    ngOnInit() {
        this.recipes = this.recipesService.getRecipes();
    }

    addRecipe() {
        this.router.navigate(['/recipes']);
    }

}
