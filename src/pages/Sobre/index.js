import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import { Container } from '../Home/styles';

function Sobre(){
  return(
    <Container>
      <Header title="Informações Sobre o Aplicativo"/>
      <Text>Sobre</Text>
    </Container>
  );
}

export default Sobre;