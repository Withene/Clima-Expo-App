import * as Location from "expo-location";
import { useState, useEffect } from "react";
import axios from "axios";

export default function userFind() {
  const [location, setLocation] = useState(null);

  const HandleGetLat = async () => {
    const location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    const key = "WN2SKRP6929NF5QSEDUEVA4W2";

    const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.coords.latitude.toString()},${location.coords.longitude.toString()}?key=${key}&lang=pt`;

    const urlCity = `https://api.geodatasource.com/v2/city?lat=${location.coords.latitude.toString()}&lng=${location.coords.longitude.toString()}&key=6MKNZPGMR5OJPMLREITVRK2PS6C781BF`;

    const city = await axios.get(`${urlCity}`);

    const result = await axios.get(`${baseUrl}`);

    setLocation(location);

    result.data.currentConditions.City = city.data;

    return result.data;
  };

  return { HandleGetLat };
}
