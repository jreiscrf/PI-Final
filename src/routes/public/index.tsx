import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../pages/LogIn";
import SignUp from "../../pages/SignUp";
import Forgot from "../../pages/Forgot";
import HomePublic from "../../pages/HomePublic";
import Search from "../../pages/Search";

const PublicStack = createNativeStackNavigator();

export const Public = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />

      <PublicStack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />

      <PublicStack.Screen
        options={{ headerShown: false }}
        name="Forgot"
        component={Forgot}
      />

      <PublicStack.Screen
        options={{ headerShown: false }}
        name="HomePublic"
        component={HomePublic}
      />

      <PublicStack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Search}
      />
    </PublicStack.Navigator>
  );
};
