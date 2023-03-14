import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import MapScreen from "../MapScreen";

import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../store/auth";

const Home = () => {
  const dispatch = useDispatch();

  const navigateToLogin = React.useCallback(() => {
    dispatch(setAuthenticated(false));
  }, [dispatch]);

  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={{ flex: 0, zIndex: 1 }}></View>
      <View style={{ flex: 1, zIndex: 0 }}>
        <MapScreen />
      </View>
    </View>
  );
};

export default Home;
