import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import HorizontalScrollView from '../../components/HorizontalScrollView';

function Home({route}) {
  console.log(route);

  const cor = route.params ? route.params.cor : null;
  const frase = route.params ? route.params.frase : null;

  return (
    <Container>
      <Header
        style={{color: 'rgba(255, 255, 255)'}}
        title="Tela Inicial"></Header>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollEventThrottle={10}>
        <HorizontalScrollView frase={frase} cor={cor} />
      </ScrollView>
    </Container>
  );
}

export default Home;
