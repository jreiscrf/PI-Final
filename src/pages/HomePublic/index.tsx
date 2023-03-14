import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import MapScreen from "../MapScreen";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../store/auth";

const HomePublic = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const navigateToLogin = () => {
    navigate("Login" as never);
  };

  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={{ flex: 0, zIndex: 1 }}>
        <Header onPress={navigateToLogin} />
      </View>
      <View style={{ flex: 1, width: "50%", backgroundColor: "blue" }}>
        <MapScreen />
      </View>
    </View>
  );
};

export default HomePublic;
