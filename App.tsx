import "expo-dev-client";
import "@formatjs/intl-locale/polyfill";
import "@formatjs/intl-listformat/polyfill";
import "@formatjs/intl-listformat/locale-data/en";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootNavigationContainer } from "#app/navigation/RootNavigationContainer";
import { RootNavigator } from "#app/navigation/RootNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigationContainer>
        <RootNavigator />
      </RootNavigationContainer>
    </SafeAreaProvider>
  );
}
