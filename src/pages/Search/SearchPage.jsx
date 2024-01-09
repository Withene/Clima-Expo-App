import {Box, Flex, ListItem, Pressable, Text} from "@react-native-material/core";
import {FlatList, TouchableOpacity} from "react-native";
import { Title } from "../Home/styled";
import { Divider } from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {clearInput, basicInfo, setSelect} from "../../store";
import mainService from "../../Hooks/GetTimer";
import searchCity from "../../Hooks/GetCity";
import {useTheme} from "styled-components";



const SearchPage = ({ route, teste }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
    const theme = useTheme();
  const service = mainService();
  return (
    <Box h={"100%"} style={{ backgroundColor: theme.colors.backgroundColor }}>
        <Box w={"100%"} p={"5%"}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Box h={60}>
              <Pressable
                style={{ height: 50, paddingTop: 10, paddingLeft: 5 }}
                onPress={async () => {
                    await service.handleGetInf(item.lat, item.lng)
                      dispatch(clearInput())
                    dispatch(basicInfo(item));
                    dispatch(setSelect(true));
                    navigation.navigate("Home");
                }}>
                <Title size={"20px"} color={"red"}>
                  {item?.name} - {item?.adminCodes1?.ISO3166_2}
                </Title>
              </Pressable>
              <Divider />
            </Box>
          );
        }}
      />
        </Box>
    </Box>
  );
};

export default SearchPage;
