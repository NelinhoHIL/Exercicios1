import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './StackNavigator';
import BottomTabNavigator from "./TabNavigator";
import DrawerNavigator from './DrawerNavigator';



 export default App = () => {
   return (
     <NavigationContainer>
      <DrawerNavigator  />
     </NavigationContainer>
   );
 }



//const estilos = StyleSheet.create({
 // container: {
   // flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
//},

//fonte: {
 //  fontSize: 40,
 //},
 //}