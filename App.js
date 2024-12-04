import React from "react";
import { Text, View } from "react-native";

import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import estilos from "./estilos";

export default function App () {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.texto }>Casa (home)</Text>
      <Entypo name="home" size={80} color="black" />

      <Text style={ estilos.texto }>Usuário (user)</Text>
      <FontAwesome name="user" size={80} color="black" />

      <Text style={ estilos.texto }>Usuário Verificado (verified-user)</Text>
      <MaterialIcons name="verified-user" size={ 50 } color="#d9d9d9" />
      
      <Text style={ estilos.texto }>Círculo de Usuário supervisionado (supervised-user-circle)</Text>
      <MaterialIcons name="supervised-user-circle" size={ 50 } color="gold" />
    </View>
  )
};
