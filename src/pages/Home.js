import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import TextField from '../components/TextField';
import React, { useState, useLayoutEffect } from 'react'

export default function Home({ navigation }) {
  const [quilometros, setQuilometros] = useState("")
  const [consumido, setConsumido] = useState("")

  const resultPage = () => {
    if (quilometros !== "" && consumido !== "") {
        navigation.navigate("Result", {consumido, quilometros})
    } else {
        Alert.alert("É necessário que os dados sejam preenchidos.")
    }
  }

  return (
    <View style={styles.container}>
      <View style={{padding: 10, elevation: 2, backgroundColor: '#D9CFF3', borderRadius: 15}}>
        <TextField
          label="KM rodados"
          value={quilometros}
          onChange={setQuilometros}
          place="Informe o Usuário"
        />
        <TextField
          label="Litros consumidos"
          value={consumido}
          onChange={setConsumido}
          place="Password"
        />
      </View>
      <TouchableOpacity
          style={{
            marginTop: 10,
            borderRadius: 15,
            backgroundColor: '#C9FB87',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            padding: 10,
            elevation: 2
          }}
          onPress={resultPage}
      ><Text>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 30
  }
});
