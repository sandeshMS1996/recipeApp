import {Injectable, EventEmitter, Output} from '@angular/core';
import {RecipesModel} from './Recipes.model';
import {Ingredients} from '../shared/Ingredients';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  @Output() RecipeSelected =  new EventEmitter<RecipesModel>();
  private recipes: RecipesModel[] = [
    new RecipesModel( 'first recipe', 'first recipe Description',
      'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'
    , [
        new Ingredients('Meat', 150),
        new Ingredients('French Fries', 100)
      ]),
    new RecipesModel('second Recipe', 'second-recipe description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563',
      [
        new Ingredients('Pork', 150),
        new Ingredients('French Fries', 100)

      ]
    )
  ];
  constructor(private shoppingService: ShoppingListService) { }
  getRecipes(): RecipesModel[] {
    return this.recipes.slice();
  }
  addRecipeToShoppingList(ingredients: Ingredients[]): void {
    ingredients.forEach(a => this.shoppingService.addIngredients(a));
  }
}
