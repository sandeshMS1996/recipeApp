import {Ingredients} from '../shared/Ingredients';

export class RecipesModel {
  // tslint:disable-next-line:variable-name
  constructor(public name: string, public description: string,
              public imageLocation: string, public ingredients?: Ingredients[]) {
  }

}
