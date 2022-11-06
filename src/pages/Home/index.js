import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';   
import {Container} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Tts from 'react-native-tts';

function Home() {

    //let screenWidth = Dimensions.get('window').width;

    const handleVoice = frase => {
        Tts.speak(frase);
        Tts.setDefaultLanguage('pt-BR');
    };

    const cards = [
        {id: 1, frase: 'Ouvir música',     cor: '#89578B'},
        {id: 2, frase: 'Assistir ao jogo', cor: '#f27171'},
        {id: 3, frase: 'Passear',          cor: '#663399'},
        {id: 4, frase: 'Ir ao banheiro',   cor: '#f39d3e'},
        {id: 5, frase: 'Tomar água',       cor: '#44d1ed'},
        {id: 6, frase: 'Dormir',           cor: '#51B563'},
      ];

  return (
    <Container>
      <Header title="Tela Inicial" />
      <ScrollView
        //horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        //scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}} //ios
        // onScroll={event => {
        //   let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y =${event.nativeEvent.contentOffset.y}`;
        //   console.log(logData);
        // }}
        scrollEventThrottle={10}>
        <Swiper loop>
          {cards.map(card => {
            return (
              <TouchableOpacity
                key={card.id}
                onPressIn={() => handleVoice(card.frase)}>
                <View
                  style={{ 
                    backgroundColor: card.cor,
                    //width: screenWidth,
                    //flex: -1,
                    width: 665,
                    height: 330,
                    borderWidth: 5,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 10,
                  }}>
                  <Text style={{fontSize: 40, color: 'white'}}>
                    {card.frase}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </Swiper>
      </ScrollView>
    </Container>
  );
}

export default Home;
