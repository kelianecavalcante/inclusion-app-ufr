import React from 'react';
import {Container, BellButton} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import HorizontalScrollView from '../../components/HorizontalScrollView';
import Entypo from 'react-native-vector-icons/Entypo';
import RNBeep from 'react-native-a-beep';


function Home({route}) {

  const cor = route.params ? route.params.cor : null;
  const frase = route.params ? route.params.frase : null;

  return (
    <Container>
      <Header
        style={{color: 'rgba(255, 255, 255)'}}
        title="Tela Inicial">
      </Header>
      <BellButton onPressIn={ () => {RNBeep.PlaySysSound(RNBeep.AndroidSoundIDs.TONE_CDMA_ABBR_ALERT)}}>
        <Entypo name="bell" size={50} color="#000" />
      </BellButton>			
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
