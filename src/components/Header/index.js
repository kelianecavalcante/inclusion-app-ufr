import React from 'react';
import Feather from 'react-native-vector-icons/Ionicons';

import {Container, MenuButton, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

function Header({title}) {
  const navigation = useNavigation();
  return (
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={45} color="#999" />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  );
}

export default Header;
