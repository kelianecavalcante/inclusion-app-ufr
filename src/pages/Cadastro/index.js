import React from 'react';
import { View, Text, Button } from 'react-native';

//import Feather from 'react-native-vector-icons/Ionicons';
import {Container, SearchContainer, Input, SearchButton} from './styles';
import Header from '../../components/Header';

function Cadastro(){
    return(
      <Container>
        <Header title="Cadastro de Cards"/>
      <SearchContainer>
      <Input
        placeholder="Informe frase para novo card"
      />
      <SearchButton>
        <Button title="Salvar" onPress={() => alert('Card Cadastrado!')}/>
     </SearchButton>

        <Text>Sobre</Text>
        </SearchContainer>
      </Container>
    );
}

export default Cadastro;
