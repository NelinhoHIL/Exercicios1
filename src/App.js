import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Familia from './componentes/relacao/Familia';
import Membro from './componentes/relacao/Membro';

export default class App extends Component {
  render() {
    return (
      <View style={estilos.container}>
        <Familia>
           <Membro nome="Ana" sobrenome="Silva"/>
           <Membro nome="José" sobrenome="Silva"/>
        </Familia>

        <Familia>
           <Membro nome="Bianca" sobrenome="Cunha"/>
           <Membro nome="Gustavo" sobrenome="Cunha"/>
        </Familia>
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
