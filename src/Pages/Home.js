import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Stories from '../Components/Stories';
import Pessoas from '../Components/Pessoas';


export default function Home() {

  const [pessoas, setPessoas] = useState([]);

  async function getPessoas() {
    await fetch('http://10.139.75.21:5251/api/Pessoas/GetAllPessoas', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setPessoas(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPessoas();
  }, [])


  return (
    <View style={css.container}>
      <Image source={require("../../assets/LogoProjetoFinal3.png")} style={css.logo} />
      {pessoas ?
        <>
          <Stories pessoas={pessoas} />
          <FlatList
            data={pessoas}

            renderItem={({ item }) => 
            <Pessoas 
            pessoaNome={item.pessoaNome} 
            pessoaFoto={item.pessoaFoto} 
            pessoaRoupa={item.pessoaRoupa} 
            image={item.image} 
            pessoaCor={item.pessoaCor} 
            pessoaSexo={item.pessoaSexo} 
            pessoaObservacao={item.pessoaObservacao} 
            pessoaLocalDesaparecimento={item.pessoaLocalDesaparecimento} 
            pessoaDtDesaparecimento={item.pessoaDtDesaparecimento} 
            pessoaDtEncontro={item.pessoaDtEncontro} 
            pessoaStatus={item.pessoaStatus}/>}
            
            keyExtractor={(item) => item.PessoaId}
            contentContainerStyle={{ height: (pessoas.length * 600) + 110 }}
          />
          
        </>
        :
        <Text style={css.text}>Carregando pessoas...</Text>
      }
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#E39DFA",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width:"100%"
  },
  text: {
    color: "white"
  },
  btn: {
    backgroundColor: "white",
    color:"white",
    width: "70%",
    height: 80,
    borderRadius: 5,
  },
  logo:{
    width:"40%",
    height:"20%"
  }
})