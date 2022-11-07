import React from 'react'; 
import { Container } from './styles';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalScrollView from '../../components/HorizontalScrollView';

function Home() {
  return (
    <Container>
      <Header style={{color: 'rgba(255, 255, 255)'}} title="Tela Inicial" />
      <ScrollView
        //horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollEventThrottle={10}>
        <HorizontalScrollView/>
      </ScrollView>
    </Container>
  );
}

export default Home;
