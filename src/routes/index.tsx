// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { Public } from "./public";
// import { Private } from "./private";
// import { useSelector } from "react-redux";

// export const Routes = () => {
//   const auth = useSelector((state) => state.auth.isAuthenticated);
//   return (
//     <NavigationContainer>{auth ? <Private /> : <Public />}</NavigationContainer>
//   );
// };

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { createSwitchNavigator } from "@react-navigation/compat";
import { Public } from "./public";
import Private from "./private";

export const Routes = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const Switch = createSwitchNavigator(
    {
      Public: Public,
      Private: Private,
    },
    {
      initialRouteName: auth ? "Private" : "Public",
    }
  );
  return (
    <NavigationContainer>
      <React.Fragment>
        <Switch />
      </React.Fragment>
    </NavigationContainer>
  );
};
