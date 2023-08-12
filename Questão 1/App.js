import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './src/components/Card';

const App = () => {
  return (
    <View style={styles.container}>
      <Card backgroundColor="#009A49" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070015',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});

export default App;

/* 1. (Exercício aula 10/08) 
- Criar um componente que:
- Renderize um Card, com a cor de fundo recebida via props, e tenha altura 300
- Seja clicável:
- Quando o card for pressionado, a API deverá ser requisitada, e os as informações retornadas pela API renderizadas (length e fact)
- OBS: Vocês devem utilizar apenas um estado*/