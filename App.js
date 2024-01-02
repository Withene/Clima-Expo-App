import { StatusBar } from "expo-status-bar";
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
import { Box } from "@react-native-material/core";
import { ImageBackground } from "react-native";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_600SemiBold,
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
    <ThemeProvider theme={tema}>
      <ImageBackground
        style={{ width: null, height: null, backgroundColor: "#0B0C1E" }}>
        <StatusBar />
        <Box pt={"10%"} h={"100%"} style={{ backgroundColor: "transparent" }}>
          <Home />
        </Box>
      </ImageBackground>
    </ThemeProvider>
  );
}
