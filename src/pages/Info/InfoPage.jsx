import DefaultDisplay from "../../components/MainDisplayComponent/MainDisplayComponent";
import CubeComponent from "../../components/CubeComponent/CubeComponent";
import SunComponent from "../../components/SunComponent/SunComponent";
import GraphComponent from "../../components/Graph/Graph";
import React, { useState } from "react";
import { Box } from "@react-native-material/core";
import { useTheme } from "styled-components";

const InfoPage = () => {
  const [Datalocation, setDatalocation] = useState(null);
  const [Url, setUrl] = useState(null);
  const theme = useTheme();
  return (
    <Box h={"100%"} style={{ backgroundColor: theme.colors.backgroundColor }}>
      <DefaultDisplay Url={Url} Datalocation={Datalocation} />

      <CubeComponent />

      <SunComponent />

      {/* Grafico*/}
      <GraphComponent />
    </Box>
  );
};

export default InfoPage;
