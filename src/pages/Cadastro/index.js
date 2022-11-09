import React from 'react';
import {View, Text, Button, Form, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import {Container, SearchContainer, Input, SearchButton} from './styles';
import Header from '../../components/Header';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

function Cadastro(props) {

  const [frase, setFrase] = useState('');
  const [cor, setCor] = useState('#CBE09F');

  function handleSave (){

    // verificar se o campo está vazio
    if(frase == ''){
      alert('Digite uma frase para o novo card!');
      return;
    }else{

      // AsyncStorage.setItem('frase', JSON.stringify(frase));
      // AsyncStorage.setItem('cor', JSON.stringify(cor));
      alert('Card cadastrado com sucesso!');
      props.navigation.navigate('Home', {frase: frase, cor: cor});
     
    }

    const data = {
      frase,
      cor,
    }

    //console.log(data, 'teeste data');
  }

  return (
    <Container>
      <Header title="Cadastro de Cards" />
      <SearchContainer>

        <TextInput 
        style={styles.input}
        onChangeText={setFrase}
        value={frase}
        placeholder="Informe frase para novo card" 
        onChange={(e) => setFrase(e.target.value)}
        />
      </SearchContainer>

        <SearchButton>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSave}>
            <Text style={{fontSize: 17, color: "#000", fontWeight: 'bold'}}>Salvar</Text>
          </TouchableOpacity>
        </SearchButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 650,
    height: 80,
    backgroundColor: '#CFCACA',
    padding: 18,
    fontSize: 18,
  },

  button: {
    width: 80,
    height: 50,
    backgroundColor: '#50D94D',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -280,
  },

});

export default Cadastro;
