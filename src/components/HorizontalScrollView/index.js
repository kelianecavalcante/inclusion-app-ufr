import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Tts from 'react-native-tts';
import Swiper from 'react-native-swiper';
import {Text, TouchableOpacity, Dimensions} from 'react-native';
import uuid from 'react-uuid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CardDetails} from './styles';

function HorizontalScrollView({frase, cor}) {
  let screenWidth = Dimensions.get('window').width;

  const handleVoice = frase => {
    Tts.speak(frase);
    Tts.setDefaultLanguage('pt-BR');
  };

  const cardsDefault = [
    {id: uuid(), frase: 'Ouvir música', cor: '#A5BEFA'},
    {id: uuid(), frase: 'Assistir ao jogo', cor: '#A5BEFA'},
    {id: uuid(), frase: 'Passear', cor: '#A5BEFA'},
    {id: uuid(), frase: 'Ir ao banheiro', cor: '#A5BEFA'},
    {id: uuid(), frase: 'Tomar água', cor: '#A5BEFA'},
    {id: uuid(), frase: 'Dormir', cor: '#A5BEFA'},
  ];

  const [cards, setCards] = useState(cardsDefault);

  useEffect(() => {
    if (frase) {
      setCards([...cards, {id: uuid(), frase: frase, cor: cor}]);
    }
  }, [frase, cor]);

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
                width: 650,
                height: 310,
                borderWidth: 5,
                borderRadius: 10,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
                marginBottom: 20,
                shadowColor: '#000',
                elevation: 20,
              }}>
              <CardDetails>
                <AntDesign name="arrowleft" size={70} color="#595760" />
                <Text style={{fontSize: 35, color: '#000', fontWeight: 'bold'}}>
                  {card.frase}
                </Text>
                <AntDesign name="arrowright" size={70} color="#595760" />
              </CardDetails>
            </View>
          </TouchableOpacity>
        );
      })}
    </Swiper>
  );
}

export default HorizontalScrollView;
