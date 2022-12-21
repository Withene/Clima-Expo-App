
import React, { useState, useEffect } from "react";
import { Box, Flex, Spacer, HStack, ListItem, VStack, Button, IconButton, ActivityIndicator, Snackbar, Text } from "@react-native-material/core";
import * as Location from 'expo-location';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Title, Timer, Label } from "./styled";
import { Image, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import userFind from "../../Hooks/GetTimer";
import { Ions } from "../../utils/icons";



function Home() {
    const { HandleGetLat } = userFind();
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [Datalocation, setDatalocation] = useState(null);
    const [Url, setUrl] = useState(null);
    const [FiveDays, setFiveDays] = useState(null);




    useEffect(() => {


        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status === 'granted') {
                let data = await HandleGetLat()
                setDatalocation(data.currentConditions)

                  setUrl(Ions[data.currentConditions.icon].uri)

                data.days = data.days.slice(2, 7)
                setFiveDays(data.days)
                setErrorMsg(null)
                setLoading(false)
            }else{
                setDatalocation({})
                setFiveDays([])

                setLoading(false)
            }
        })();


    }, []);

    const reload = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted') {
            setLoading(true)
        let data = await HandleGetLat()

        setDatalocation(data.currentConditions)
        setUrl(Ions[data.currentConditions.icon].uri)
        data.days = data.days.slice(2, 7)
        setFiveDays(data.days)

        setLoading(false)
        setErrorMsg(null)
        }else{

           return setErrorMsg(<Snackbar
            message="A Permissão de localização é necessária"
            style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
          />)
        }

    }

    if (loading) {
        return   <Flex fill center={true}>
        <ActivityIndicator size={70}  color="#f8f8f8" />
        <Text variant="button"  style={{marginTop:20, color: "#f8f8f8"}}>Carregando..</Text>
      </Flex>
    }



    return (
        <Flex fill>
            <Box h={40} pr={20} style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                <IconButton icon={props => <Icon name="crosshairs-gps" color={'white'} size={34} onPress={reload}/>} />
            </Box>
            <Box fill style={{ justifyContent: 'center' }}>
                <Flex justifyContent="center" alignItems="center" >

                    <Timer>{Datalocation.City ? Datalocation.City.city : '-----'}</Timer>
                    <Title size={'15px'}>{Datalocation.City ? Datalocation.City.region : 'Clique no Gps'}</Title>

                </Flex>
            </Box>

            <Box mt={10}>
                <Flex justifyContent="center" alignItems="center" >
                    <Box mb={20}>

                        <Image source={Url ? Url : Ions.cloudy.uri} style={{ width: 74, height: 74 }} />
                    </Box>
                    <Title size={'15px'}>{Datalocation.conditions ? Datalocation.conditions.charAt(0).toUpperCase() + Datalocation.conditions.slice(1) : 'Clique no Gps'}</Title>

                    <Box mt={20} style={{ justifyContent: 'center' }}>
                        <Timer>{
                            Datalocation.temp ? (5 / 9 * (Datalocation.temp - 32)).toFixed(0) + 'ºC' : '----'
                        }</Timer>
                    </Box>
                </Flex>
            </Box>

            <Box fill >
                <Box mt={35}  >

                    <VStack m={4} spacing={10} >

                        <HStack m={4} style={{ justifyContent: 'space-around' }} spacing={6} >
                            <Box w={120} >
                                <Flex justify="center" alignItems="center" >
                                    <Label>Senc. Térmica</Label>
                                    <Box h={4} />
                                    <Title >{
                                        Datalocation.feelslike ? (5 / 9 * (Datalocation.feelslike - 32)).toFixed(0) + 'ºC' : '0 ºC'
                                    }</Title>
                                </Flex>


                            </Box >

                            <Box w={120} >
                                <Flex justify="center" alignItems="center" >
                                    <Label>Umidade</Label>
                                    <Box h={4} />
                                    <Title >{Datalocation.humidity ? Datalocation.humidity + ' %' : 0 + ' %'}</Title>
                                </Flex>

                            </Box >




                        </HStack>

                        <HStack m={4} style={{ justifyContent: 'space-around' }} spacing={6} >
                            <Box w={120} >
                                <Flex justify="center" alignItems="center" >
                                    <Label>Vel. Vento</Label>
                                    <Box h={4} />
                                    <Title >{Datalocation.windspeed ? Datalocation.windspeed + ' km/h' : 0 + ' km/h'}</Title>
                                </Flex>


                            </Box >

                            <Box w={120}  >
                                <Flex justify="center" alignItems="center" >
                                    <Label>Chuva</Label>
                                    <Box h={4} />
                                    <Title >{Datalocation.precip ? Datalocation.precip + 'mm' : '0mm'} - {Datalocation.precipprob === null ? 0 + "%" : Datalocation.precipprob ? Datalocation.precipprob + "%" : "0 %"}</Title>
                                </Flex>

                            </Box >




                        </HStack>

                    </VStack>
                </Box>
            </Box>

            <Flex fill justify="end" mb={60} m={10}>
                <Box m={10} >

                    <Title weigth={700} size={'15px'}>Previsão Para 5 Dias</Title>



                    {/* PRINCIPAL */}
                    <HStack mt={10} style={{ justifyContent: 'space-around' }} spacing={6}>

                        {
                            FiveDays.map((e, index) => {
                                e.datetime = new Date(e.datetime)
                                let day = 'Segunda'
                                switch(e.datetime.getDay()){
                                    case 1:
                                         day = 'Domingo'
                                    break;
                                    case 2:
                                         day = 'Segunda'
                                    break;
                                    case 3:
                                        day = 'Terça'
                                    break;
                                    case 4:
                                        day = 'Quarta'
                                    break;
                                    case 5:
                                        day = 'Quinta'
                                    break;
                                    case 6:
                                        day = 'Sexta'
                                    break;
                                    case 0:
                                        day = 'Sábado'
                                    break;
                                }

                                return (<Flex alignItems="center" key={index}>
                                    <Title weigth={400} size={'12px'}>{day}</Title>
                                    <Box w={65} h={72} m={4} style={{ justifyContent: 'center', borderWidth: 2, borderColor: "white", borderRadius: 10, }} >
                                        <Flex justify="center" alignItems="center">

                                            <Image source={Ions[e.icon].uri ? Ions[e.icon].uri : ''} style={{ width: 24, height: 24 }} />
                                            <Title weigth={400} size={'12px'}>
                                                {
                                                e.tempmax ? (5 / 9 * (e.tempmax - 32)).toFixed(0) + 'ºC' : '--'
                                                 }
                                            </Title>
                                        </Flex>

                                    </Box>
                                </Flex>
                                )
                            })
                        }







                    </HStack>
                </Box>
            </Flex>


             {errorMsg ? errorMsg : errorMsg}

        </Flex>

    )




}



export default Home;