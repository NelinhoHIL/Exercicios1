import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import DimensoesFixas from './componentes/DimensoesFixas';

export default class App extends Component {
  render() {
    return (
      <View>
        <DimensoesFixas />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fonte: {
    fontSize: 40,
  },
});
