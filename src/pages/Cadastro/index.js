import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import {Container, SearchContainer, SearchButton} from './styles';
import Header from '../../components/Header';
import {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

function Cadastro(props) {
  const [frase, setFrase] = useState('');
  const [cor, setCor] = useState('#A5BEFA');

  function handleSave() {
    // verificar se o campo está vazio
    if (frase == '') {
      alert('Digite uma frase para o novo card!');
      return;
    } else {
      // AsyncStorage.setItem('frase', JSON.stringify(frase));
      // AsyncStorage.setItem('cor', JSON.stringify(cor));
      alert('Card cadastrado com sucesso!');
      props.navigation.navigate('Home', {frase: frase, cor: cor});
    }

    // const data = {
    //   frase,
    //   cor,
    // }
  }

  return (
    <Container>
      <Header title="Cadastro"/>
      <SearchContainer>
        <TextInput
          style={styles.input}
          onChangeText={setFrase}
          value={frase}
          color="#000"
          placeholder="Informe frase para novo card"
          onChange={e => setFrase(e.target.value)}
        />
      </SearchContainer>

      <SearchButton>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSave}
          value={frase}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: 'bold'}}>
            Salvar
          </Text>
        </TouchableOpacity>
      </SearchButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 670,
    height: 100,
    backgroundColor: '#A5BEFA',
    padding: 18,
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    marginBottom: -35,
  },

  button: {
    width: 100,
    height: 50,
    backgroundColor: '#50D94D',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -280,
    borderRadius: 5,
  },
});

export default Cadastro;
