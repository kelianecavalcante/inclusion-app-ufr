import React from 'react';
import { Text } from 'react-native';
import Header from '../../components/Header';
import { Container } from '../Home/styles';
import { ViewInformations } from './styles';

function Sobre(){
  return(
    <Container>
      <Header title="Sobre o aplicativo"/>
      <ViewInformations>
        <Text style={{fontSize: 18, color: '#000', textAlign: 'justify', margin: 30}}>
        Protótipo para auxiliar pessoas com deficiência visual e motora na comunicação.
        Desenvolvido por aluna graduanda do curso de Sistemas de Informação da Universidade 
        Federal de Rondonópolis.
        {'\n'}{'\n'}
        2022 - Licença MIT
        {'\n'}{'\n'}
        Keliane.Cavalcante@aluno.ufr.edu.br
        </Text>        
      </ViewInformations>
    </Container>
  );
}

export default Sobre;