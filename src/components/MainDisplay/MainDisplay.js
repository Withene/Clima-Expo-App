import { Image, View } from "react-native";
import {Box, Flex, HStack, Spacer, Text, VStack,} from "@react-native-material/core";
import { Ions } from "../../utils/icons";
import { Timer, Title } from "../../pages/Home/styled";
import React from "react";
import { MainContainer } from "./StyledDisplay";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {useTheme} from "styled-components";





const DefaultDisplay = ({ Url, Datalocation }) => {

    let theme = useTheme();


  return (
      <Box>
    <Flex justifyContent="center" alignItems="center" >
      <MainContainer mt={10}  style={{
          elevation:5,
          backgroundColor: theme.colors.contrastMain,
          shadowOpacity: 0.75,
          shadowRadius: 1,
          shadowColor: '#3E4054FF',
      }}>

       <HStack alignItems="center" justify={"between"}>
        {/*Icone*/}
        <Box>
            <Image
                source={Url ? Url : Ions.cloudy.uri}
                style={{ width: 140, height: 100 }}
            />
        </Box>


        <VStack alignItems="flex-start" ml={10}  h={60}>
            <Box w={'90%'} >
            <Timer size={'40px'}  >
                29 ºC
            </Timer>
            </Box>
           <HStack alignItems="center" mr={30} spacing={2}>
               <Icon name={'map-marker'} size={20} color={'white'} />
               <Flex w={110} h={40} justify={"center"} mt={5}>
                   <Title size={'15px'} numberOfLines={2}>Ceilândia - DF</Title>
               </Flex>

           </HStack>
        </VStack>

       </HStack>

      </MainContainer>


    </Flex>
    </Box>
  );
};

export default DefaultDisplay;
