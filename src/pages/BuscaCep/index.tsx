import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, Button, Keyboard } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import { api } from "../../service/api";

export const BuscaCep = () => {
  const [cep, setCep] = useState<string>("")

  const buscar = async () => {
    if (cep === '') {
      alert("Digite um cep");
      return
    }
    try {
      const response = await api.get(`/${cep}/json`)
      console.log(response.data)
      Keyboard.dismiss();
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.text}>Buscar Ceps</Text>
        <TextInput placeholder="Ex. 25655000" value={cep} onChangeText={(text) => setCep(text)}
          keyboardType="numeric" />
      </View>
      <Button title="Buscar" onPress={buscar} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
  }
});