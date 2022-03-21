import { StatusBar } from 'expo-status-bar';

import Home from './src/pages/Home/Home';
import { Box } from "@react-native-material/core";
import { ImageBackground, } from "react-native";



const image = { uri: 'https://images.unsplash.com/photo-1641230620922-78eb471d6046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80g' };
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
