import React from "react";
import { View, Button } from "react-native";
import Padrao from "../estilo/Padrao";

const Home = ({ navigation }) => {
  return (
    <View style={Padrao.center}>
      <Button
        title="Ir para Tela About"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Ir para Tela Botão"
        onPress={() => navigation.navigate("Botão")}
      />
      <Button
        title="Ir para Tela Simples"
        onPress={() => navigation.navigate("Simples")}
      />
    </View>
  );
};

export default Home;