import React from 'react';
import { View, StyleSheet } from 'react-native';
import RandomUser from './src/components/RandomUser';

const App = () => {
  return (
    <View style={styles.container}>
      <RandomUser />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0482C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


/*
3. Crie um componente que:
 - Renderize pelo menos 6 dados retornados sobre a pessoa pela API  https://randomuser.me/api/
Links to an external site.
 - Possua um botão na tela
 - A Api deverá ser executada uma vez quando o componente for renderizado, e toda vez que o botão for clicado, assim, 
atualizando os dados renderizados sobre o usuário
*/