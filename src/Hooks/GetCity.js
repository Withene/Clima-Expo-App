import * as Location from "expo-location";
import { useState, useEffect } from "react";
import axios from "axios";

export default function searchCity() {
  const handleGetCity = async name => {
    const baseUrl = `https://secure.geonames.org/searchJSON?name_equals=${name}&featureClass=P&featureCode=PPL&featureCode=PPLC&featureCode=PPLX&maxRows=5&username=withene`;
    const data = [];
    const result = await axios.get(`${baseUrl}`);

    if (result.data && result.data.hasOwnProperty("geonames")) {
      result.data.geonames.forEach(element => {
        // if (element.population > 0) {
        data.push(element);
        // }
      });
    }

    return data;
  };

  return { handleGetCity };
}
