import { StatusBar } from 'expo-status-bar';

import Home from './src/pages/Home/Home';
import { Box } from "@react-native-material/core";
import { ImageBackground, } from "react-native";



export default function App() {
  return (
    <ImageBackground source={require('./assets/bs.png')} style={{ width: null, height: null }}  >
      <StatusBar />
      <Box pt={'10%'} h={'100%'} style={{ backgroundColor: 'transparent' }} >
        <Home />
      </Box>
    </ImageBackground>
  );
}
