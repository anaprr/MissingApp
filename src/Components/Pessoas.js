import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, Image, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';


export default function Pessoas(
    {navigation, 
    pessoaNome,
    pessoaRoupa, 
    pessoaCor, 
    pessoaSexo, 
    pessoaObservacao, 
    pessoaLocalDesaparecimento, 
    pessoaFoto, 
    pessoaDtDesaparecimento, 
    pessoaDtEncontro,


    
}) {

    const { setNovaobs } = useContext( AuthContext );
  
    const [exibe, setExibe] = useState(false); 
    const [mostra, setMostra] = useState(false); 
    const [ criaObs, setCriaobs ] = useState(false);
    const[ observacoes, setObservacoes ] = useState([]);
    const[ error, setError ] = useState(false)
    const[ observacoesDescricao, setObservacoesDescricao] = useState("")
    const[ observacoesLocal, setObservacoesLocal] = useState("")
    const[ observacoesData, setObservacoesData] = useState("")
    const[ pessoaId, setPessoaId] = useState("")
    const[ usuarioId, setUsuarioId] = useState("")
    const[sucesso, setSucesso] = useState(false)
    const[erro, setErro] = useState(false)



    async function NovaOBS() {
        await fetch('http://10.139.75.41:5251/api/Observacoes/CreateObservacoes', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            observacoesDescricao: observacoesDescricao,
            observacoesLocal: observacoesLocal,
            observacoesData: observacoesData,
            pessoaId: pessoaId, // Ensure this has a valid value
            usuarioId: usuarioId, // Ensure this has a valid value
          })
        })
          .then(res =>res.json()) 
            .catch(err => console.log(err))
        }


    const FuncionaDetalhe = () => {
        setExibe(!exibe); 
    };

    const FuncionaOBS = () => {
        setMostra(!mostra); 
    };

    return (
        <View style={css.tudo}>
            
        <View style={css.caixamaior}>
            
           <View style={css.caixa}>
            <View style={css.Textealinha}>
            
          <View style={css.infoexibe}>
          <View >
                <Text style={css.text}>{pessoaNome}</Text>
            </View>     
            <View>
                <Image style={css.foto} source={{ uri: pessoaFoto }}  ></Image>
            </View>
            <TouchableOpacity style={css.btnDetalhes} onPress={FuncionaDetalhe}>
                <Text style={css.btnDetalhesText}>
                    {exibe ? 'Fechar Detalhes' : 'Detalhes'}
                </Text>
            </TouchableOpacity>
          
          </View>
            </View>
           </View>
                {exibe && ( 
                    <View style={css.caixaitens}>
                    <Text style={css.text}> Roupa da Pessoa:{pessoaRoupa}</Text>
                    <Text style={css.text}>Cor:{pessoaCor}</Text>
                    <Text style={css.text}>Observação:{pessoaObservacao}</Text>
                    <Text style={css.text}>Sexo:{pessoaSexo}</Text>
                    <Text style={css.text}>Local do Desaparecimento:{pessoaLocalDesaparecimento}</Text>
                    <Text style={css.text}>Data Do Desaparecimento:{pessoaDtDesaparecimento}</Text>
                    <Text style={css.text}> Encontro:{pessoaDtEncontro}</Text> 

                    <View>
                    <View style={css.caixatexto}>
         
        </View> 
        <View >
                <Text style={css.text2}>Insira uma Nova Observação:</Text>
            </View> 
        { sucesso ? <Text>Observação Enviada!</Text> :
        <> 
        <TextInput style={css.input}
            placeholder="descrição" placeholderTextColor={'white'} onChangeText={(digitado) => setObservacoesDescricao(digitado)} TextInput={observacoesDescricao}
        />
        <TextInput style={css.input}
            placeholder="local" placeholderTextColor={'white'} onChangeText={(digitado) => setObservacoesLocal(digitado)} TextInput={observacoesLocal}
        />
        <TextInput style={css.input}
            placeholder="data" placeholderTextColor={'white'} onChangeText={(digitado) => setObservacoesData(digitado)} TextInput={observacoesData}
        />
        <TextInput style={css.input}
            placeholder="pessoa" placeholderTextColor={'white'} onChangeText={(digitado) => setPessoaId(digitado)} TextInput={pessoaId}
        />
        <TextInput style={css.input}
            placeholder="usuario" placeholderTextColor={'white'} onChangeText={(digitado) => setUsuarioId(digitado)} TextInput={usuarioId}
        />
        </> 
        }
        { erro && <Text>Tente Novamente</Text>}

      <TouchableOpacity  onPress={NovaOBS}><Text style={css.botao}>Salvar</Text></TouchableOpacity>
      
        </View>
        </View>
                    
                    
        )} 
</View>

        </View>

  )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
       textAlign:"center"
        },
      text:{
        textAlign:"center"
      },
    caixamaior: {
        alignItems: 'center',
        marginTop: 40,
        width: 250,
        borderRadius:5,
        backgroundColor:"#B03EE5"
    }, 
    foto: {
        padding: 50,
        marginTop: 30,
        width: "50%",
        height: "50%",
    }, 
    caixa: {
        width: "95%",
        height: 150,
        borderRadius: 5,
        justifyContent:"center",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        borderBottomColor: 'white',
        borderColor: 'white'
        
    },
     Textealinha: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 40,
    },
    tudo:{
        width: "100%",
    },
    botao :{
        textAlign:"center",
        color:"white"
       
    },
    caixaitens:{
        textAlign:"center"
    },
    text2:{
        color:"white",
        textAlign:"center"
    }

})