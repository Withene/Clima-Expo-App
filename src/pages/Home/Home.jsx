import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  ActivityIndicator,
  Text,
} from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { TouchableHighlight } from "react-native";

import { useTheme } from "styled-components";
import { Snackbar, TextInput } from "react-native-paper";

import InfoPage from "../Info/InfoPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchPage from "../Search/SearchPage";
import { useNavigation } from "@react-navigation/native";

import searchCity from "../../Hooks/GetCity";
import { useDispatch, useSelector } from "react-redux";
import { resetInput } from "../../store";
import mainService from "../../Hooks/GetTimer";

const Stack = createNativeStackNavigator();
function Home({ route }) {
  const snackBarInit =
    "Oops! We couldn't fetch your location 🌍. To provide you with accurate weather updates, could you please grant us access to your location? 📍";
  const hookSearch = searchCity();
  const hookService = mainService();

  const clearInput = useSelector(state => state.clearInput);
  const needSearch = useSelector(state => !state.byUser);
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [snackBarMenssage, setsnackBarMenssage] = useState(snackBarInit);
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    setCity("");
    dispatch(resetInput());
  }, [clearInput]);

  useEffect(() => {
    (async () => {
      if (needSearch) {
        const status = await hookService.handleGetByAndroid();
        if (!status) {
          onToggleSnackBar();
        }
      }
    })();
  }, []);

  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <Flex fill>
        <Box
          h={"100%"}
          style={{ backgroundColor: theme.colors.backgroundColor }}>
          <TouchableHighlight>
            <>
              <Box
                fill
                style={{ justifyContent: "center", marginBottom: 20 }}
                mt={30}>
                <Flex justifyContent="center" alignItems="center" mt={40}>
                  <TextInput
                    placeholder={"Search your city"}
                    mode={"outlined"}
                    textColor={"white"}
                    value={city}
                    onChange={async e => {
                      setCity(e.nativeEvent.text);
                      const data = await hookSearch.handleGetCity(
                        e.nativeEvent.text,
                      );
                      navigation.navigate("Search", { data: data });
                    }}
                    style={{
                      backgroundColor: theme.colors.main,
                      width: "89%",
                      color: "white",
                      borderRadius: 30,
                    }}
                    outlineStyle={{ borderRadius: 20 }}
                    left={
                      <TextInput.Icon
                        icon={() => (
                          <Icon
                            name={"magnify"}
                            size={24}
                            color={"white"}
                            onPress={() => {
                              navigation.navigate("Home");
                            }}
                          />
                        )}
                        size={30}
                      />
                    }
                    right={
                      <TextInput.Icon
                        icon={() => (
                          <Icon
                            name={"crosshairs-gps"}
                            size={24}
                            color={"white"}
                            onPress={async () => {
                              const status =
                                await hookService.handleGetByAndroid();
                              if (!status) {
                                setsnackBarMenssage(snackBarInit);
                                onToggleSnackBar();
                              } else {
                                onToggleSnackBar();
                                setsnackBarMenssage("Location found! 📍");
                              }
                            }}
                          />
                        )}
                        size={30}
                      />
                    }
                  />
                </Flex>
              </Box>
            </>
          </TouchableHighlight>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={InfoPage}
              options={{
                headerShown: false,
                statusBarColor: "#0B0C1E",
              }}
            />
            <Stack.Screen
              name="Search"
              component={SearchPage}
              options={{
                headerShown: false,
                statusBarColor: "#0B0C1E",
              }}
            />
          </Stack.Navigator>
        </Box>
      </Flex>

      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        {snackBarMenssage}
      </Snackbar>
    </>
  );
}

export default Home;
