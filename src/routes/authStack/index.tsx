import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../pages/Login";
import Cadastro from "../../pages/Cadastro";
import TabNavigator from "../tabNavigator";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Menu"
        component={TabNavigator}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
      />      
    </Stack.Navigator>
  );
};

export default AuthStack;
