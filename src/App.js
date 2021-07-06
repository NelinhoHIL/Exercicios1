import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import ListaProdutos from './componentes/lista/ListaProdutos';

export default class App extends Component {
  render() {
    return (
      <View style={estilos.container}>
        <ListaProdutos />
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
