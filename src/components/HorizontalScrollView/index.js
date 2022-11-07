import {View} from 'react-native';
import React from 'react';
import Tts from 'react-native-tts';
import Swiper from 'react-native-swiper';
import {Text, TouchableOpacity, Dimensions} from 'react-native';
import uuid from 'react-uuid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CardDetails} from './styles';

function HorizontalScrollView() {
  let screenWidth = Dimensions.get('window').width;

  const handleVoice = frase => {
    Tts.speak(frase);
    Tts.setDefaultLanguage('pt-BR');
  };

  const cards = [
    {id: uuid(), frase: 'Ouvir música', cor: '#89578B'},
    {id: uuid(), frase: 'Assistir ao jogo', cor: '#f27171'},
    {id: uuid(), frase: 'Passear', cor: '#663399'},
    {id: uuid(), frase: 'Ir ao banheiro', cor: '#f39d3e'},
    {id: uuid(), frase: 'Tomar água', cor: '#44d1ed'},
    {id: uuid(), frase: 'Dormir', cor: '#51B563'},
  ];

  return (
    <Swiper loop>
      {cards.map(card => {
        return (
          <TouchableOpacity
            key={card.id}
            onPressIn={() => handleVoice(card.frase)}>
            <View 
              style={{
                backgroundColor: card.cor,
                width: screenWidth,
                //flex: -1,
                width: 680,
                height: 330,
                borderWidth: 8,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }} >
                <CardDetails>
                  <AntDesign name="arrowleft" size={70} color="#000" />
                  <Text style={{fontSize: 35, color: "#000", fontWeight: 'bold'}}>{card.frase}</Text>
                  <AntDesign name="arrowright" size={70} color="#000" />
                </CardDetails>
            </View>
          </TouchableOpacity>
        );
      })}
    </Swiper>
  );
}

export default HorizontalScrollView;
