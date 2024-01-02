import { Box, Flex, HStack } from "@react-native-material/core";
import { BoxOfDays, Title } from "../../pages/Home/styled";
import { Image } from "react-native";
import { Ions } from "../../utils/icons";
import React from "react";

const CubeComponent = () => {
  return (
    <Box fill mt={"8%"} mb={"5%"}>
      <HStack justify={"evenly"}>
        <BoxOfDays selected={true}>
          <Flex fill alignItems={"center"} mt={"5%"}>
            <Image
              source={Ions.humidity.uri}
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
              source={Ions.rainChance.uri}
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
            <Image source={Ions.wind.uri} style={{ width: 32, height: 32 }} />
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
  );
};

export default CubeComponent;
