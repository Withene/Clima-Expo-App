import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_200ExtraLight,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import Home from "./src/pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store, { persistor } from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line
    Poppins_400Regular,
    // eslint-disable-next-line
    Poppins_500Medium,
    // eslint-disable-next-line
    Poppins_300Light,
    // eslint-disable-next-line
    Poppins_600SemiBold,
    // eslint-disable-next-line
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; // ou qualquer outra lógica de carregamento
  }

  const tema = {
    colors: {
      primaryColor: "#fff",
      contrastColor: "black",
      main: "#0B0C1E",
      contrastMain: "#1B1D2E",
    },
    fontFamily: "Poppins_400Regular",
  };

  return (
    <>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={tema}>
              <NavigationContainer>
                <Home />
              </NavigationContainer>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </>
  );
}
