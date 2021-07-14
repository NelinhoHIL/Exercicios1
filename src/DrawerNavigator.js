import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { TabStackNavigator, BotaoStackNavigator, SimplesStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="About" component={TabStackNavigator} />
      <Drawer.Screen name="Botão" component={BotaoStackNavigator} />
      <Drawer.Screen name="Simples" component={SimplesStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;