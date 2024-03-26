import type { DrinkDTO } from "src/api/searchCocktails.dto";
import type { Cocktail } from "src/Cocktail.type";

const mapDrinkToCocktail = (drink: DrinkDTO): Cocktail => ({
  id: drink.idDrink,
  name: drink.strDrink,
  instructions: drink.strInstructions,
  ingredients: Object.entries(drink)
    .filter(([key, value]) => key.startsWith("strIngredient") && value)
    .map(([key, value]) => {
      const index = parseInt(key.replace("strIngredient", ""), 10);
      return {
        name: value,
        measure: drink[`strMeasure${index}` as keyof DrinkDTO] ?? null,
      };
    }),
  thumbnail: drink.strDrinkThumb,
  glass: drink.strGlass,
});

export const searchCocktails = async (search: string): Promise<Cocktail[]> => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
  );
  const data = await response.json();
  return data.drinks.map(mapDrinkToCocktail);
};
