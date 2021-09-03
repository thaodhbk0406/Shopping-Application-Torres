import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {


  private recipes: Recipe[] = [
    new Recipe(
      'First Test Recipe',
      'This is the first simple recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
        [
            new Ingredient('Meat', 6),
            new Ingredient('Beef steak', 9)
        ]
      ),
    new Recipe(
      'Second Test Recipe',
      'This is the second simple recipe',
      'https://tse4.mm.bing.net/th?id=OIP.W8apTKARTqVhmLzMCisNmAHaEs&pid=Api&P=0&w=255&h=162',
        [
            new Ingredient('Meat oil', 6),
            new Ingredient('Beef steak and butter', 9)
        ]
      ),
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes() {
    return this.recipes;
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
