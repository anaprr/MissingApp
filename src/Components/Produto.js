import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Produtos({title,price,image,description,category,rating}) {
  return (
    <View style={styles.caixa}>
        <View style={styles.caixa2}>
            <View style={styles.circleAvatar}></View>
            <Text style={styles.texto}>{title}</Text>
        </View>
        <View>
         <Text style={styles.texto}>{category}</Text>
        </View>
        <View>
            <Image style={styles.foto} source={{ uri: image}}/>
        </View>
        <View>
          <Text  style={styles.texto} >{price}</Text>
        </View>
        <View>
            <Text style={styles.texto}>{description}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    foto: {
      height: 415,
      width: 420,
    },
    caixa:{
        marginTop:80
    },
    texto:{
        textAlign:"center",
        fontWeight:"bold",
        marginLeft: 10
        
    },
    circleAvatar:{
        padding: 15,
        backgroundColor: 'black',
        borderRadius: 15
    },
    caixa2:{
        flexDirection:"row",
        marginLeft:10,
        alignItems:"center"
    }
  })