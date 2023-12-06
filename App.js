import { StatusBar } from "expo-status-bar";

import Home from "./src/pages/Home/Home";
import { Box } from "@react-native-material/core";
import { ImageBackground } from "react-native";
import { ThemeProvider } from "styled-components";

export default function App() {
  const tema = {
    colors: {
      primaryColor: "#fff",
      contrastColor: "black",
    },
  };

  const greetingMessage = () => {
    // let h = new Date() // formato 24 horas (0-23)
    // if (h.getHours() <= 18) {
    //     return require('./assets/bg.jpg');
    // } else {
    //     return  require('./assets/bs.jpg');
    // }
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
