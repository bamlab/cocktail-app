import "expo-dev-client";

import { View } from "react-native";
import { cocktailMock } from "src/Cocktail.type";
import { CocktailItem } from "src/CocktailItem.component";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <CocktailItem item={cocktailMock} />
    </View>
  );
}
