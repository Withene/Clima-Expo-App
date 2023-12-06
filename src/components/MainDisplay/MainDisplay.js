import { Image, View } from "react-native";
import { Box, Flex, Text } from "@react-native-material/core";
import { Ions } from "../../utils/icons";
import { Timer, Title } from "../../pages/Home/styled";
import React from "react";
import { MainContainer } from "./StyledDisplay";

const DefaultDisplay = ({ Url, Datalocation }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <MainContainer mt={10}>
        <Flex direction={"row"} alignItems="center">
          <Box>
            <Image
              source={Url ? Url : Ions.test.uri}
              style={{ width: 110, height: 110 }}
            />
          </Box>

          <Box style={{ justifyContent: "center" }}>

            <Timer>
              {Datalocation.temp
                ? ((5 / 9) * (Datalocation.temp - 32)).toFixed(0) + "ºC"
                : "----"}
            </Timer>
          </Box>
        </Flex>
      </MainContainer>
    </Flex>
  );
};

export default DefaultDisplay;
