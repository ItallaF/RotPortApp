import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Login from "../../pages/Login";
// import Cadastro from "../../pages/Cadastro";
import AtualizaCadastro from "../../pages/AtualizaCadastro";

import Menu from "../../pages/Menu";
import MenuPontos from "../../pages/MenuPontos";
import MenuEventos from "../../pages/MenuEventos";
import MenuRotas from "../../pages/MenuRotas"

import Festival from "../../components/eventos/festival";
import SerraBranca from "../../components/eventos/serraBranca";

import Parque from "../../components/pontos/parque";
import Cachoeira from "../../components/pontos/cachoeira";
import Mercado from "../../components/pontos/mercado";
import Praca from "../../components/pontos/praca";
import RotaCachoeira from "../../components/rotas/rotaCachoeira";
import RotaPraca from "../../components/rotas/rotaPraca";
import RotaMercado from "../../components/rotas/rotaMercado";
import RotaParque from "../../components/rotas/rotaParque";
import { AntDesign, FontAwesome5, Foundation, Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import IgrejaSaoJose from "../../components/pontos/igrejaSaoJose";
import RotaIgrejaSaoJose from "../../components/rotas/rotaIgrejaSaoJose";
import AniversarioPorteirinha from "../../components/eventos/aniversarioPorterinha";
import MotoPort from "../../components/eventos/motoport";
import DivinoEspiritoSanto from "../../components/eventos/divinoEspiritoSanto";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="Cachoeira"
        component={Cachoeira}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="Mercado"
        component={Mercado}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="Praca"
        component={Praca}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="Parque"
        component={Parque}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="IgrejaSaoJose"
        component={IgrejaSaoJose}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="Festival"
        component={Festival}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="SerraBranca"
        component={SerraBranca}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="AniversarioPorteirinha"
        component={AniversarioPorteirinha}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="MotoPort"
        component={MotoPort}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="DivinoEspiritoSanto"
        component={DivinoEspiritoSanto}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="RotaCachoeira"
        component={RotaCachoeira}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="RotaMercado"
        component={RotaMercado}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="RotaPraca"
        component={RotaPraca}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="RotaParque"
        component={RotaParque}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="RotaIgrejaSaoJose"
        component={RotaIgrejaSaoJose}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
      <Stack.Screen
        name="AtualizaCadastro"
        component={AtualizaCadastro}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: false
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#F8F5F5' },
        tabBarInactiveTintColor: '#007FFF',
        tabBarActiveTintColor: '#0b5228',
      }}>
      <Tab.Screen
        name="Menu"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#F8F5F5',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="MenuPontos"
        component={MenuPontos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="mountains" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MenuEventos"
        component={MenuEventos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MenuRotas"
        component={MenuRotas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="route" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route: any) => {
  //console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  console.log(routeName);

  if (routeName == 'Login' || routeName == 'Cadastro') {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
