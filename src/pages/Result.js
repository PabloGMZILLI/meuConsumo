import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

export default function Result(props) {
    const { consumido, quilometros } = props.route.params
    const [ classe, setClasse ] = useState(null);
    
    if (!classe) {
        let media = quilometros / consumido;
        console.log('media: ', media);
        if (media < 4) setClasse('E');
        else if (media < 8) setClasse('D');
        else if (media < 10) setClasse('C');
        else if (media < 12) setClasse('B');
        else setClasse('A')
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
            <Text>Foi consumido {consumido} litros</Text>
            <Text>Foi andado {quilometros} quilometros</Text>
            <Text>Média de consumo: {quilometros/consumido}</Text>
            <Text>Nível de acordo com o inmetro: {classe}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 30
    },
    containerItem: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5,
    }
});
