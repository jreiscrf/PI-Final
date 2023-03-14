import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { setAuthenticated } from "../../store/auth";
import { useDispatch } from "react-redux";

import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Search from "../../pages/Search";
import Login from "../../pages/LogIn";

const Tab = createBottomTabNavigator();

const Private = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setAuthenticated(false));
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Perfil") {
            iconName = focused ? "user-alt" : "user";
          } else if (route.name === "Produtos") {
            iconName = focused ? "shopping-cart" : "shopping-cart";
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ff5b2d",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Profile} />
      <Tab.Screen name="Produtos" component={Search} />
      <Tab.Screen
        name="Logout"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="sign-out-alt" size={size} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            handleLogout();
            navigation.navigate("Public");
          },
        })}
      />
    </Tab.Navigator>
  );
};
export default Private;
