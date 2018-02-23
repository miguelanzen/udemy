import { Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../services/shopping.service';

@Component({
    selector: 'app-edit-list',
    templateUrl: './edit-shopping.component.html',
    styleUrls: ['./edit-shopping.component.css']
})
export class EditListComponent implements OnInit {

    constructor( private shoppingService: ShoppingService ) {}

    @ViewChild('ingredientName') ingredientName: ElementRef;
    @ViewChild('ingredientAmount') ingredientAmount: ElementRef;
    newIngredient: Ingredient = { name: '', amount: 0};

    ngOnInit() {}

    addIngredient() {

        const newName = this.ingredientName.nativeElement.value;
        const newAmount = this.ingredientAmount.nativeElement.value;

        if (
            newName !== ''
            && newAmount !== ''
        ) {
            this.newIngredient = {
                name: newName,
                amount: newAmount
            };

            this.shoppingService.addIngredient(this.newIngredient);

        }
    }
}
