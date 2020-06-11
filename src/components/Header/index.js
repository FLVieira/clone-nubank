import React from 'react';
import { Container, Top, Logo, Title, Button } from './styles';

import logo from '~/assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ handleToggleAnimation }) {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Fábio</Title>
      </Top>
      <Button onPress={handleToggleAnimation}>
        <Icon name="keyboard-arrow-down" size={20} color="#fff" />
      </Button>
    </Container>
  );
}
