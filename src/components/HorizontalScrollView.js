import React, { Component } from 'react';
import Tts from 'react-native-tts';

import { 
    AppRegistry, 
    ScrollView, 
    Text, View,
    TouchableOpacity,
    Dimensions, 
    TouchableHighlight} from 'react-native';

export default class HorizontalScrollView extends Component {
    render() { 
        let screenWidth = Dimensions.get('window').width;      
        let screenHeight = Dimensions.get('window').height;    
        




        const handleVoice1 = () => {
            Tts.speak('Ouvir musica');
            Tts.setDefaultLanguage('pt-BR');

        }

        const handleVoice2 = () => {
            Tts.speak('Assistir ao jogo');
            Tts.setDefaultLanguage('pt-BR');

        }

        const handleVoice3 = () => {
            Tts.speak('Passear');
            Tts.setDefaultLanguage('pt-BR');

        }

        const handleVoice4 = () => {
            Tts.speak('Ir ao banheiro');
            Tts.setDefaultLanguage('pt-BR');

        }

        const handleVoice5 = () => {
            Tts.speak('Tomar água');
            Tts.setDefaultLanguage('pt-BR');

        }

        return(
        //     <View style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
        //      <TouchableHighlight onPress={()=> handleVoice()}>
        //         <Text>SUBSCRIBE</Text>
        //      </TouchableHighlight>
        //     </View>
        // );
    
            <ScrollView
                horizontal={true} 
                 
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}    
                scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}} //ios                    
                // onMomentumScrollBegin={()=>{
                //     // alert('Begin scrolling')
                // }}
                // onMomentumScrollEnd={() => {
                //     //alert('End scrolling')
                // }}
                onScroll={(event)=>{
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y =${event.nativeEvent.contentOffset.y}`
                    console.log(logData);
                }}
                scrollEventThrottle={10}

            >
                <TouchableOpacity  onPress={()=> handleVoice1()}>
                <View style={{
                    backgroundColor:'#b6f',
                    flex: 1,
                    width: screenWidth,
                    borderWidth: 8,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <Text 
                    style={{fontSize:35, 
                            padding: 15, 
                            color: 'white',                                            
                            textAlign: 'center'
                            }}                
                    >
                    
                        Ouvir música
                   
                   
                    </Text> 
                </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> handleVoice2()}>
                <View style={{
                    backgroundColor:'#f27171',
                    flex: 1,
                    width: screenWidth, 
                    borderWidth: 8,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text 
                        style={{fontSize:35, 
                                padding: 15, 
                                color: 'white',                                            
                                textAlign: 'center'
                                }}                
                    >
                    Assistir ao jogo
                    </Text> 
                </View>

                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> handleVoice3()}>
                
                <View style={{
                    backgroundColor:'#663399',
                    flex: 1,
                    width: screenWidth,
                    borderWidth: 8,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                    
                }}>
                    <Text 
                        style={{fontSize:35, 
                                padding: 15, 
                                color: 'white',                                            
                                textAlign: 'center'
                                }}                
                    >
                    Passear
                    </Text> 
                </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> handleVoice4()}>
                <View style={{
                    backgroundColor:'#f39d3e',
                    flex: 1,
                    width: screenWidth,
                    borderWidth: 8,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                    
                }}>
                    <Text 
                        style={{fontSize:35, 
                                padding: 15, 
                                color: 'white',                                            
                                textAlign: 'center'
                                }}                
                    >
                    Ir ao banheiro
                    </Text> 
                </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=> handleVoice5()}>
                <View style={{
                    backgroundColor:'#44d1ed',
                    flex: 1,
                    width: screenWidth,
                    borderWidth: 8,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                    
                }}>
                    <Text 
                        style={{fontSize:35, 
                                padding: 15, 
                                color: 'white',                                            
                                textAlign: 'center'
                                }}                
                    >
                    Tomar água
                    </Text> 
                </View>
                </TouchableOpacity>
            </ScrollView>);        
        }
        
    }

