import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Mega from './componentes/MegaSena/Mega';

export default class App extends Component {
  render() {
    return (
      <View style={estilos.container}>
        <Mega qtdeNumeros={7}/>
      </View>
    );
  }
}


// export default App = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator  />
//     </NavigationContainer>
//   );
// }

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
