import {View, FlatList, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Tts from 'react-native-tts';

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
      {frase: 'Ouvir música', cor: '#b6f'},
      {frase: 'Assistir ao jogo', cor: '#f27171'},
      {frase: 'Passear', cor: '#663399'},
      {frase: 'Ir ao banheiro', cor: '#f39d3e'},
      {frase: 'Tomar água', cor: '#44d1ed'},
    ];

    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}} //ios
        onScroll={event => {
          let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y =${event.nativeEvent.contentOffset.y}`;
          console.log(logData);
        }}
        scrollEventThrottle={10}>
        {cards.map(card => {
          return (
            <TouchableOpacity onPress={() => handleVoice(card.frase)}>
              <View
                style={{
                  backgroundColor: card.cor,
                  flex: 1,
                  width: screenWidth,
                  borderWidth: 8,
                  borderColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>{card.frase}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    padding: 15,
    color: 'white',
    textAlign: 'center',
  },
});
