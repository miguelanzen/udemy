import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../services/shopping.service';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    constructor (private shoppingService: ShoppingService ) {}

    ingredients: Ingredient[];
    alreadyInList: Boolean;
    ingredientsSubscription: Subscription;

    ngOnInit() {
        this.ingredients = this.shoppingService.getIngredients();
        this.ingredientsSubscription = this.shoppingService.ingredientsUpdated.subscribe((updatedList: Ingredient[]) => {
            this.ingredients = updatedList;
        });
    }

    ngOnDestroy(){
        this.ingredientsSubscription.unsubscribe();
    }

}
