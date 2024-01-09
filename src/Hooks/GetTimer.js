import axios from "axios";
import { useDispatch } from "react-redux";
import {
  allInfo,
  setCurrentConditions,
  setDays,
  setName,
  setSelect,
  setSunProgress,
} from "../store";
import { EXPO_PUBLIC_API_KEY } from "@env";
import searchCity from "./GetCity";
import * as Location from "expo-location";
import { useTheme } from "styled-components";

export default function mainService() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleGetInf = async (lat, long) => {
    const key = EXPO_PUBLIC_API_KEY;
    const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?key=${key}&lang=pt`;

    const temp = await axios.get(`${baseUrl}`);

    // temp.data = data;
    dispatch(
      setSunProgress([
        temp.data.days[0].sunrise.slice(0, -3),
        temp.data.days[0].sunset.slice(0, -3),
      ]),
    );

    const graphData = [];

    graphData.push({ value: 10, hideDataPoint: true });
    for await (const element of temp.data.days.slice(0, 5)) {
      graphData.push({
        value: (((element.temp - 32) * 5) / 9).toFixed(0) - 5,
        dataPointText: (((element.temp - 32) * 5) / 9).toFixed(0) + "ºC",
        dataPointRadius: 5,
        label: getDayOfWeekAbbreviation(element.datetime),
        labelTextStyle: { color: theme.colors.primaryColor },
      });
    }
    graphData.push({ value: 10, hideDataPoint: true });

    dispatch(setDays(graphData));
    dispatch(setCurrentConditions(temp.data.days[0]));
  };

  const getDayOfWeekAbbreviation = dateString => {
    const date = new Date(dateString);

    const dayAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dayIndex = date.getDay();

    return dayAbbreviations[dayIndex];
  };

  const handleGetNameOfCity = async (lat, long) => {
    const urlCity = `https://api.geodatasource.com/v2/city?lat=${lat}&lng=${long}&key=6MKNZPGMR5OJPMLREITVRK2PS6C781BF`;

    const city = await axios.get(`${urlCity}`);
    const serviceName = searchCity();
    const name = await serviceName.handleGetCity(city.data.city);
    dispatch(setName(name[0]));
  };

  const handleGetByAndroid = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status != "granted") {
      return false;
    }

    const location = await Location.getCurrentPositionAsync({});

    if (location) {
      await handleGetInf(location.coords.latitude, location.coords.longitude);
      await handleGetNameOfCity(
        location.coords.latitude,
        location.coords.longitude,
      );
      dispatch(setSelect(false));
    }

    return true;
  };

  return { handleGetInf, handleGetNameOfCity, handleGetByAndroid };
}
