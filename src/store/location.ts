import { createSlice } from "@reduxjs/toolkit";
import * as Location from "expo-location";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  errorMessage: string | null;
}

const initialState: LocationState = {
  latitude: null,
  longitude: null,
  errorMessage: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.errorMessage = null;
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setLocation, setError } = locationSlice.actions;

export const getLocation = () => async (dispatch: any) => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      dispatch(setError("Permissão para acessar localização negada"));
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    dispatch(
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })
    );
  } catch (error: any) {
    dispatch(setError(error.message));
  }
};

export default locationSlice.reducer;
