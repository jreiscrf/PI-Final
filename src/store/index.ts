import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import LoadingReducer from "./loading";
import LocationReducer from "./location";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    loading: LoadingReducer,
    location: LocationReducer,
  },
});
