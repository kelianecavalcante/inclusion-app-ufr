import {View, FlatList, StyleSheet, Button} from 'react-native';
import React, {Component} from 'react';
import Tts from 'react-native-tts';
import Swiper from 'react-native-swiper';

import {
  AppRegistry,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

export default class HorizontalScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;

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
      <ScrollView
        //horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}} //ios
        onScroll={event => {
          let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y =${event.nativeEvent.contentOffset.y}`;
          console.log(logData);
        }}
        scrollEventThrottle={10}>
          <Swiper
          loop
          >
          {cards.map(card => {
          return (
            <TouchableOpacity key={card.id} onPressIn={() => handleVoice(card.frase)}>
              <View
                style={{
                  backgroundColor: card.cor,
                  width: screenWidth,
                  //flex: -1,
                  width: 680,
                  height: 350,
                  borderWidth: 8,
                  borderColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 40, color: 'white'}}>{card.frase}</Text>
              </View>
            </TouchableOpacity>
      
          );
        })} 
        </Swiper>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({

//   button: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
