import React, { Component } from 'react';
import { 
    AppRegistry, 
    ScrollView, 
    Text, View,
    Dimensions } from 'react-native';

export default class HorizontalScrollView extends Component {
    render() { 
        let screenWidth = Dimensions.get('window').width;      
        let screenHeight = Dimensions.get('window').height;     
        return(
            <ScrollView
                horizontal={true} 
                 
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}    
                scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}} //ios                    
                onMomentumScrollBegin={()=>{
                    // alert('Begin scrolling')
                }}
                onMomentumScrollEnd={() => {
                    //alert('End scrolling')
                }}
                onScroll={(event)=>{
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y =${event.nativeEvent.contentOffset.y}`
                    console.log(logData);
                }}
                scrollEventThrottle={10}
            >
                <View style={{
                    backgroundColor:'#3e9b6f',
                    flex: 1,
                    width: screenWidth,                                 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text 
                    style={{fontSize:20, 
                            padding: 15, 
                            color: 'white',                                            
                            textAlign: 'center'
                            }}                
                    >
                    Ouvir música
                    </Text> 
                </View>
                <View style={{
                    backgroundColor:'#f27171',
                    flex: 1,
                    width: screenWidth,                
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text 
                        style={{fontSize:20, 
                                padding: 15, 
                                color: 'white',                                            
                                textAlign: 'center'
                                }}                
                    >
                    Assistir ao jogo
                    </Text> 
                </View>
                <View style={{
                    backgroundColor:'#663399',
                    flex: 1,
                    width: screenWidth,                
                    justifyContent: 'center',
                    alignItems: 'center'
                    
                }}>
                    <Text 
                        style={{fontSize:20, 
                                padding: 15, 
                                color: 'white',                                            
                                textAlign: 'center'
                                }}                
                    >
                    Passear
                    </Text> 
                </View>
            </ScrollView>);        
        }
    }

