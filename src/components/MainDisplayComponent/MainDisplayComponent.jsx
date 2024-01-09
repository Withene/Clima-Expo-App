import { Image } from "react-native";
import { Box, Flex, HStack, VStack } from "@react-native-material/core";
import { Ions } from "../../utils/icons";
import { Timer, Title } from "../../pages/Home/styled";
import React from "react";
import { MainContainer } from "./StyledDisplay";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";

const DefaultDisplay = ({ Url }) => {
  const theme = useTheme();
  const name = useSelector(state => state.city);
  const currentConditions = useSelector(state => state.currentConditions);

  return (
    <Box>
      <Flex justifyContent="center" alignItems="center">
        <MainContainer
          mt={10}
          style={{
            elevation: 5,
            backgroundColor: theme.colors.contrastMain,
            shadowOpacity: 0.75,
            shadowRadius: 1,
            shadowColor: "#3E4054FF",
          }}>
          <HStack alignItems="center" justify={"between"}>
            {/* Icone*/}
            <Box>
              <Image
                source={Url ? Url : Ions.cloudy.uri}
                style={{ width: 140, height: 100 }}
              />
            </Box>

            <VStack alignItems="flex-start" ml={10} h={60}>
              <Box w={"90%"}>
                <Timer size={"40px"}>
                  {currentConditions.temp
                    ? (((currentConditions.temp - 32) * 5) / 9).toFixed(0)
                    : "0"}{" "}
                  ºC
                </Timer>
              </Box>
              <Flex w={160} h={40} justify={"evenly"} direction={"row"} mt={5}>
                <Icon name={"map-marker"} size={20} color={"white"} />
                <Title size={"15px"} numberOfLines={2}>
                  {name}
                </Title>
              </Flex>
            </VStack>
          </HStack>
          {/* <Box pl={15} pt={8}>*/}
          {/*  <Title size={"12px"}>*/}
          {/*    Rain with Thunderstorm, Thermal sensation 21ºC*/}
          {/*  </Title>*/}
          {/* </Box>*/}
        </MainContainer>
      </Flex>
    </Box>
  );
};

export default DefaultDisplay;
