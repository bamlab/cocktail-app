export type Ingredient = {
  name: string;
  measure: string | null;
};

export type Cocktail = {
  id: string;
  name: string;
  instructions: string;
  ingredients: Ingredient[];
  thumbnail: string;
  glass: string;
};

export const cocktailMock: Cocktail = {
  glass: "Collins glass",
  id: "178332",
  ingredients: [
    { name: "Watermelon", measure: "1/2 cup" },
    { name: "Mint", measure: "5" },
    { name: "Grapefruit Juice", measure: "1/3 Cup" },
    { name: "Lime", measure: "Juice of 1/2" },
    { name: "Tequila", measure: "1 shot" },
    { name: "Watermelon", measure: "Garnish with" },
    { name: "Mint", measure: "Garnish with" },
  ],
  instructions:
    "In a mason jar muddle the watermelon and 5 mint leaves together into a puree and strain. Next add the grapefruit juice, juice of half a lime and the tequila as well as some ice. Put a lid on the jar and shake. Pour into a glass and add more ice. Garnish with fresh mint and a small slice of watermelon.",
  name: "Smashed Watermelon Margarita",
  thumbnail:
    "https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg",
};
