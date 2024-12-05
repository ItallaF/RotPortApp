import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import TabNavigator from "./tabNavigator";
import AuthStack from "./authStack";


export default function () {
  return (
    <NavigationContainer>
      <AuthStack /> 
    </NavigationContainer>
  );
}