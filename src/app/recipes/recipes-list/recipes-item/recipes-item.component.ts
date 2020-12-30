import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../../Recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  constructor() { }
  @Input() Parentrecipes: RecipesModel;
  @Output() detailedRecipe =  new EventEmitter<void>();
  ngOnInit(): void {
    console.log('Recipes-item');
  }
  RecipeDescription(recipe: RecipesModel): void {
    this.detailedRecipe.emit();
  }
}
