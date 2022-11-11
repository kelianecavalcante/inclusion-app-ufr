import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Sobre from '../pages/Sobre';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: '#FFF',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#CACBCF',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#000',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Tela Inicial',
          drawerIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          title: 'Novo Card',
          drawerIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'md-duplicate' : 'md-duplicate-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: 'Informações',
          drawerIcon: ({focused, size, color}) => (
            <Ionicons
              name={
                focused ? 'information-circle' : 'information-circle-outline'
              }
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
