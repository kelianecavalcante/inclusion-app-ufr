import React from 'react'; 
import { Container } from './styles';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalScrollView from '../../components/HorizontalScrollView';

function Home({route}) {

  const cor = route.params ? route.params.cor : 'nao existe';
  const frase = route.params ? route.params.frase : 'nao existe';

  return (
    <Container>
      <Header style={{color: 'rgba(255, 255, 255)'}} title="Tela Inicial">

      </Header>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollEventThrottle={10}>
        <HorizontalScrollView
          frase = {frase}
          cor = {cor}
        />
      </ScrollView>
    </Container>
  );
}

export default Home;
