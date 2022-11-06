import react from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Sobre from '../pages/Sobre';

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator
        screenOptions={{
            headerShown: false,

            drawerStyle: {
                backgroundColor: '#090A0E',
                paddingTop: 20,
            },
            drawerActiveBackgroundColor: '#E72F49',
            drawerActiveTintColor: '#FFF',
            drawerInactiveTintColor: '#FFF',
        }}
        >
            <Drawer.Screen 
            name="Home" 
            component={Home} 
            options={{
                title: 'Tela Inicial',
            }}
            />
           
            <Drawer.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{
                title: 'Novo Card',
            }}
            />

            <Drawer.Screen 
            name="Sobre" 
            component={Sobre} 
            options={{
                title: 'Informações',
            }}
            />
            
        </Drawer.Navigator>
    );
}

export default Routes;