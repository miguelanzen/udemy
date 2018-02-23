import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  recipeId: number;
  editMode = false;

  constructor ( private currentPath: ActivatedRoute ) { }

  ngOnInit() {
    this.currentPath.params.subscribe( params => {
      this.editMode = params['editId'] != null;
        if ( this.editMode ) {
          this.recipeId = params['editId'];
        }
    });
  }

}
