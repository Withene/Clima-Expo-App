import { createSlice, configureStore  } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};

const locationReducer = createSlice({
  name: "locationReducer",
  initialState: {
    value: 0,
    lat: "",
    lng: "",
    city: "",
    sunProgress: [],
    clearInput: false,
    days: [],
    currentConditions: {},
    byUser: false,
  },
  reducers: {
    basicInfo: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      state.city = action.payload.name +' - '+ action.payload.adminCodes1?.ISO3166_2
    },
    setName: (state, action) => {
      state.city = action.payload.name +' - '+ action.payload.adminCodes1?.ISO3166_2
    },
    setSunProgress: (state, action) => {
      state.sunProgress = action.payload;
    },
    clearInput: state => {
      state.clearInput = true;
    },
    resetInput: state => {
      state.clearInput = false;
    },
    setDays: (state, action) => {
      state.days = action.payload;
    },
    setCurrentConditions: (state, action) => {
      state.currentConditions = action.payload;
    },
    setSelect: (state, action) => {
      state.byUser = action.payload;
    }

  },
});

const persistedReducer = persistReducer(persistConfig, locationReducer.reducer);



export const { setSelect,setDays, setSunProgress,setCurrentConditions, basicInfo, setName ,clearInput,resetInput } = locationReducer.actions;

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});

export default store;
export const persistor = persistStore(store);
