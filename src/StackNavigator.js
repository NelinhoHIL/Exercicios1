import React from "react";
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../src/componentes/Home";
import About from "../src/componentes/About";
import Botao from "../src/componentes/Botao";
import Simples from "../src/componentes/Simples";

function SimplesScreen() {
  return (
    <View>
      <Simples texto="Passando parametro" />
    </View>
  );
}

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Botão" component={Botao} />
      <Stack.Screen name="Simples" component={SimplesScreen} />
    </Stack.Navigator>
  );
}

const TabStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const BotaoStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Botão" component={Botao} />
    </Stack.Navigator>
  );
}

const SimplesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Simples" component={SimplesScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, TabStackNavigator, BotaoStackNavigator, SimplesStackNavigator };