import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import UsuarioLogado from './componentes/UsuarioLogado';

export default class App extends Component {
  render() {
    return (
      <View style={estilos.container}>
        <UsuarioLogado usuario={ {nome:'teste', email:'teste@teste.com' } }/>
        <UsuarioLogado usuario={ {nome:'teste 2' } }/>
        <UsuarioLogado usuario={ {email:'teste@teste.com' } }/>
        <UsuarioLogado usuario={ null }/>
        <UsuarioLogado usuario={ {} }/>
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
