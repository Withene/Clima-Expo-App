import { Box, Flex, HStack, VStack } from "@react-native-material/core";
import { LineChart } from "react-native-gifted-charts";
import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { BoxOfDays, Title } from "../../pages/Home/styled";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";

const GraphComponent = () => {
  const theme = useTheme();
  const dataInit = [
    { value: 0, hideDataPoint: true },
    {
      value: 0,
      dataPointText: "0",
      // labelComponent: () => customLabel("Seg"),
      label: "Seg",
      dataPointRadius: 5,
      labelTextStyle: { color: "#fff" },
    },
    {
      value: 0,
      dataPointText: "0",
      // labelComponent: () => customLabel("Ter"),
      label: "ter",
      dataPointRadius: 5,
      labelTextStyle: { color: "#fff" },
    },
    {
      value: 0,
      dataPointText: "0",
      // labelComponent: () => customLabel("Qua"),
      label: "Qua",
      dataPointRadius: 5,
      labelTextStyle: { color: "#fff" },
    },
    {
      value: 0,
      dataPointText: "0",
      // labelComponent: () => customLabel("Qui"),
      label: "Qua",
      dataPointRadius: 5,
      labelTextStyle: { color: "#fff" },
    },
    {
      value: 0,
      dataPointText: "0",
      // labelComponent: () => customLabel("Sex"),
      dataPointRadius: 5,
      label: "Qua",
      labelTextStyle: { color: "#fff" },
    },
    { value: 0, hideDataPoint: true },
  ];

  const [data, setData] = useState(dataInit);

  const days = useSelector(state => state.days);

  useEffect(() => {
    if (days.length) {
      setData(days);
    }
  }, [days]);

  const screenWidth = Dimensions.get("window").width;

  return (
    <Box>
      <Box mt={"2%"} pl={"5%"}>
        <VStack>
          <Title size={"20px"} align={"left"}>
            Temperature in ºC
          </Title>
          <Title size={"15px"} align={"left"} font={"Poppins_300Light"}>
            Next Five Days
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
            animateOnDataChange={true}
            onDataChangeAnimationDuration={30000}
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
            color={"#fff"}
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
