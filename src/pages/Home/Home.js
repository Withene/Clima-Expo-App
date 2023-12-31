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
  Snackbar,
  Text
} from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {Title, Timer, Label, BoxOfDays} from "./styled";
import {Dimensions, Image, Touchable, TouchableHighlight, TouchableOpacity, View} from "react-native";

import DefaultDisplay from "../../components/MainDisplay/MainDisplay";
import GraphComponent from "../../components/Graph/Graph";

import {useTheme} from "styled-components";
import {TextInput} from "react-native-paper";





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
            <Icon
              name="crosshairs-gps"
              color={"white"}
              size={34}
            />
          )}
        />

      </Box>
      <Box fill style={{ justifyContent: "center", marginBottom:20 }}>
        <Flex justifyContent="center" alignItems="center" mt={40}>
            <TextInput
            placeholder={'Search your city'}
            mode={'outlined'}
            textColor={'white'}
            style={{backgroundColor:theme.colors.main,width:'89%',color:'white', borderRadius:30}}
            outlineStyle={{borderRadius:20}}
            left={<TextInput.Icon icon={() => <Icon name={'magnify'} size={24} color={'white'} />} size={30} />}
            />

        </Flex>
      </Box>

      <DefaultDisplay Url={Url} Datalocation={Datalocation} />

      {/*<Box fill mt={'40%'}>*/}
      {/*  <HStack justify={"around"}>*/}
      {/*  <BoxOfDays selected={true}>*/}
      {/*          <Title size={"15px"} align={"center"}>Seg</Title>*/}
      {/*  </BoxOfDays>*/}

      {/*    <BoxOfDays>*/}
      {/*      <Title size={"15px"}  align={"center"}>Ter</Title>*/}
      {/*    </BoxOfDays>*/}

      {/*    <BoxOfDays>*/}
      {/*      <Title size={"15px"}  align={"center"}>Qua</Title>*/}
      {/*    </BoxOfDays>*/}

      {/*    <BoxOfDays>*/}
      {/*      <Title size={"15px"}  align={"center"}>Qui</Title>*/}
      {/*    </BoxOfDays>*/}

      {/*    <BoxOfDays>*/}
      {/*      <Title size={"15px"}  align={"center"}>Sex</Title>*/}
      {/*    </BoxOfDays>*/}

      {/*  </HStack>*/}
      {/*</Box>*/}

      {/*Grafico*/}
      <GraphComponent />
      </>
    </TouchableHighlight>
    </Flex>

  );
}

export default Home;
