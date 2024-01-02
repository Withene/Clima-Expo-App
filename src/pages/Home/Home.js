import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  ListItem,
  VStack,
  Button,
  IconButton,
  ActivityIndicator,
  Text,
} from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Image, TouchableHighlight } from "react-native";

import DefaultDisplay from "../../components/MainDisplay/MainDisplay";
import GraphComponent from "../../components/Graph/Graph";

import { useTheme } from "styled-components";
import { MD3Colors, TextInput, ProgressBar } from "react-native-paper";
import { BoxOfDays, BoxOfWithColor, Title } from "./styled";
import { Ions } from "../../utils/icons";
import { MainContainer } from "../../components/MainDisplay/StyledDisplay";

function Home() {
  const [loading, setLoading] = useState(false);
  const [Datalocation, setDatalocation] = useState(null);
  const [Url, setUrl] = useState(null);
  const theme = useTheme();

  if (loading) {
    return (
      <Flex fill center={true}>
        <ActivityIndicator size={70} color="#f8f8f8" />
        <Text variant="button" style={{ marginTop: 20, color: "#f8f8f8" }}>
          Carregando..
        </Text>
      </Flex>
    );
  }

  return (
    <Flex fill>
      <TouchableHighlight>
        <>
          <Box
            h={40}
            pr={20}
            style={{ justifyContent: "center", alignItems: "flex-end" }}>
            <IconButton
              icon={props => (
                <Icon name="theme-light-dark" color={"white"} size={28} />
              )}
            />
          </Box>
          <Box fill style={{ justifyContent: "center", marginBottom: 20 }}>
            <Flex justifyContent="center" alignItems="center" mt={40}>
              <TextInput
                placeholder={"Search your city"}
                mode={"outlined"}
                textColor={"white"}
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
                      <Icon name={"magnify"} size={24} color={"white"} />
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
                        onPress={() => console.log("press")}
                      />
                    )}
                    size={30}
                  />
                }
              />
            </Flex>
          </Box>

          <DefaultDisplay Url={Url} Datalocation={Datalocation} />

          <Box fill mt={"8%"} mb={"8%"}>
            <HStack justify={"evenly"}>
              <BoxOfDays selected={true}>
                <Flex fill alignItems={"center"} mt={"5%"}>
                  <Image
                    source={Url ? Url : Ions.humidity.uri}
                    style={{ width: 32, height: 32 }}
                  />
                  <Box mt={"3%"}>
                    <Title
                      size={"17px"}
                      align={"center"}
                      font={"Poppins_600SemiBold"}>
                      20%
                    </Title>
                    <Title
                      size={"12px"}
                      align={"center"}
                      style={{ marginTop: "10px" }}>
                      Humidity
                    </Title>
                  </Box>
                </Flex>
              </BoxOfDays>

              <BoxOfDays selected>
                <Flex fill alignItems={"center"} mt={"5%"}>
                  <Image
                    source={Url ? Url : Ions.rainChance.uri}
                    style={{ width: 32, height: 32 }}
                  />
                  <Box mt={"3%"}>
                    <Title
                      size={"17px"}
                      align={"center"}
                      font={"Poppins_600SemiBold"}>
                      90%
                    </Title>
                    <Title
                      size={"12px"}
                      align={"center"}
                      style={{ marginTop: "10px" }}>
                      Prob. of rain
                    </Title>
                  </Box>
                </Flex>
              </BoxOfDays>

              <BoxOfDays selected>
                <Flex fill alignItems={"center"} mt={"5%"}>
                  <Image
                    source={Url ? Url : Ions.wind.uri}
                    style={{ width: 32, height: 32 }}
                  />
                  <Box mt={"3%"}>
                    <Title
                      size={"17px"}
                      align={"center"}
                      font={"Poppins_600SemiBold"}>
                      7 km/h
                    </Title>
                    <Title
                      size={"12px"}
                      align={"center"}
                      style={{ marginTop: "10px" }}>
                      Wind
                    </Title>
                  </Box>
                </Flex>
              </BoxOfDays>
            </HStack>
          </Box>

          <Box w={"100%"}>
            <Box pl={"5%"} mb={"1%"}>
              <Title size={"15px"} align={"left"} font={"Poppins_300Light"}>
                Sun Progress
              </Title>
            </Box>
            <Box h={20} ml={"5%"} mr={"5%"} style={{ alignItems: "center" }}>
              <Flex fill w={"100%"}>
                <ProgressBar
                  progress={0.1}
                  color={"#DBA220"}
                  style={{ width: "100%" }}
                />
              </Flex>
            </Box>
            <Box ml={"5%"} mr={"5%"} mt={-10}>
              <HStack justify={"between"}>
                <Title size={"15px"} align={"left"} font={"Poppins_300Light"}>
                  06:12 AM
                </Title>
                <Title size={"15px"} align={"left"} font={"Poppins_300Light"}>
                  08:12 PM
                </Title>
              </HStack>
            </Box>
          </Box>
          {/* Grafico*/}
          <GraphComponent />
        </>
      </TouchableHighlight>
    </Flex>
  );
}

export default Home;
