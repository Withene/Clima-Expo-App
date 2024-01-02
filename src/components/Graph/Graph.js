import { Box, Flex, HStack, VStack } from "@react-native-material/core";
import { LineChart } from "react-native-gifted-charts";
import React from "react";
import { Dimensions, View } from "react-native";
import { BoxOfDays, Title } from "../../pages/Home/styled";
import { useTheme } from "styled-components";
import { Poppins_300Light } from "@expo-google-fonts/poppins";

const customLabel = val => {
  return (
    <View style={{ width: 50, height: 20 }}>
      <Title
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 13,
          marginLeft: 20,
        }}>
        {val}
      </Title>
    </View>
  );
};

const GraphComponent = () => {
  const theme = useTheme();
  const data = [
    { value: 26, hideDataPoint: true },
    {
      value: 10,
      dataPointText: "26ºC",
      labelComponent: () => customLabel("Seg"),
      dataPointRadius: 5,
    },
    {
      value: 24,
      dataPointText: "24ºC",
      labelComponent: () => customLabel("Ter"),
      dataPointRadius: 5,
    },
    {
      value: 27,
      dataPointText: "27ºC",
      labelComponent: () => customLabel("Qua"),
      dataPointRadius: 5,
    },
    {
      value: 17,
      dataPointText: "28ºC",
      labelComponent: () => customLabel("Qui"),
      dataPointRadius: 5,
    },
    {
      value: 26,
      dataPointText: "26ºC",
      labelComponent: () => customLabel("Sex"),
      dataPointRadius: 5,
    },
    { value: 26, hideDataPoint: true },
  ];

  const screenWidth = Dimensions.get("window").width;

  return (
    <Box>
      <Box mt={"5%"} pl={"5%"}>
        <VStack>
          <Title size={"20px"} align={"left"}>
            Temperature in ºC
          </Title>
          <Title size={"15px"} align={"left"} font={"Poppins_300Light"}>
            Last Five Days
          </Title>
        </VStack>
      </Box>

      <Flex
        fill
        justify={"end"}
        mt={"10%"}
        justifyContent="end"
        alignItems="center">
        <Box style={{ marginLeft: screenWidth / 10 }}>
          <LineChart
            areaChart
            isAnimated
            // noOfSectionsBelowXAxis={10}
            animationDuration={2000}
            startFillColor={theme.colors.contrastMain}
            endFillColor={theme.colors.main}
            startOpacity={1}
            endOpacity={0.3}
            data={data}
            spacing={screenWidth / 5.3}
            curved
            thickness={3}
            hideRules
            hideYAxisText
            verticalLinesColor="rgba(14,164,164,0.5)"
            xAxisColor="transparent"
            yAxisColor="transparent"
            color1="#FFF"
            dataPointsHeight={15}
            dataPointsWidth={-5}
            textFontSize={15}
            textColor="#fff"
            height={90}
            dataPointsColor={"#DBA220"}
            overflowTop={100}
            showVerticalLines
            verticalLinesUptoDataPoint={true}
            endSpacing={20}
            initialSpacing={20}
            adjustToWidth
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GraphComponent;
