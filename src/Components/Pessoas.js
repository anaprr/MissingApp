import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Pessoas({navigation, pessoaNome, pessoaRoupa, pessoaCor, pessoaSexo, pessoaObservacao, pessoaLocalDesaparecimento, pessoaFoto, pessoaDtDesaparecimento, pessoaDtEncontro, pessoaStatus}) {
  
    const [exibe, setExibe] = useState(false); 

        const FuncionaDetalhe = () => {
            setExibe(!exibe); 
        };
    
      
    
    return (
        <View style={css.caixagrandona}>
            <View style={css.caixatextaoreto}>
                <View style={css.circleAvatar}></View>
                <Text style={css.titulofotao}>{pessoaNome}</Text>
            </View>     
            <TouchableOpacity style={css.btnDetalhes} onPress={FuncionaDetalhe}>
                <Text style={css.btnDetalhesText}>
                {exibe ? 'Fechar Detalhes' : 'Detalhes'}
                </Text>
            </TouchableOpacity>

            {exibe && ( 
                <View style={css.detalhesModal}>
                <View style={css.detalhesModal}>
                <Text style={css.descricaoproduto}>{pessoaRoupa}</Text>
            </View>
            <Text style={css.descricaoproduto}>{pessoaCor}</Text>
            <Text style={css.descricaoproduto}>{pessoaObservacao}</Text>
            <Text style={css.descricaoproduto}>{pessoaSexo}</Text>
            <Text style={css.descricaoproduto}>{pessoaLocalDesaparecimento}</Text>
            <Text style={css.descricaoproduto}>{pessoaDtDesaparecimento}</Text>
            <Text style={css.descricaoproduto}>{pessoaDtEncontro}</Text>
            <Text style={css.descricaoproduto}>{pessoaStatus}</Text>
        </View>
      )}

        </View>

  )
}
const css = StyleSheet.create({
    
    caixagrandona:{
        marginTop: 80,
        

    }, caixatextaoreto: {
        flexDirection: 'row', 
        marginLeft: 10,
        alignItems: 'center'

    }, circleAvatar: {
        padding: 15,
        backgroundColor: 'black',
        borderRadius: 15

    }, titulofotao: {
      marginBottom: 10,
      marginLeft: 10,
      fontWeight: "bold",
      fontSize: 12

    }, fotonaalinha: {
        alignItems: 'center'


    }, tipo: {
        marginBottom: 10,
        color: 'blue',
        textAlign: 'center'

    }, fotao: {
        width: 380,
        height: 380,
        


    }, valor: {
        textAlign: 'center',
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 20,
        

    }, descricaoproduto: {
        fontStyle:'italic',
        marginLeft: 10,
        marginTop: 10
    }
})