import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "#app/navigation/Home.screen";
import type { RootStackParamList } from "#app/navigation/navigation.types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};
