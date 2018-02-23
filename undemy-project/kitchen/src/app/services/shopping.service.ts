import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingService {

    ingredientsUpdated = new Subject<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
     ];

     getIngredients() {
         return this.ingredients.slice();
     }

     addIngredient(newIngredient: Ingredient) {

        let alreadyInList: boolean;

        for ( const ingredient of this.ingredients) {
            if (ingredient.name === newIngredient.name ) {
                alreadyInList = true;
                ingredient.amount = newIngredient.amount;
            }
        }

        if (!alreadyInList) {
            this.ingredients.push(newIngredient);
            alreadyInList = false;
        }

        this.ingredientsUpdated.next(this.ingredients.slice());

    }

}
