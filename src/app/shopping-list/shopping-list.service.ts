import {Injectable, Output, EventEmitter} from '@angular/core';
import {Ingredients} from '../shared/Ingredients';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() ingredientEmitter = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('salt', 10.5),
    new Ingredients('sugar', 45)
  ];
  constructor() { }
  public getIngredients(): Ingredients[] {
    return this.ingredients.slice();
  }
  public addIngredients(ingredient: Ingredients): void {
   this.ingredients.push(ingredient);
   this.ingredientEmitter.emit(this.getIngredients());
  }
}
