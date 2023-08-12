import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/screens/Header';
import Lista from './src/screens/Lista';

const App = () => {
  const dataArray = [
    { name: 'Fulano', idade: 20 },
    { name: 'Beltrano', idade: 22 },
    { name: 'Ciclano', idade: 19 },
    { name: 'Jhon Doe', idade: 30 },
  ];

  return (
    <View style={styles.container}>
        <Header title="Lista de Pessoas" />
        <Lista data={dataArray} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9D6D04',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

/* 2. Crie um app que:
- Renderize 2 componentes criados por vocês: Lista e Header
- O componente de lista irá receber por props um array de itens que possua o seguinte formato: 
      array = [{name: "Fulano", idade: 20}, {name: "Beltrano", idade: 22}, {name: "Ciclano", idade: 19}, {name: "Jhon Doe", idade: 30}]
- Vocês deverão renderizar os itens do array em formato de lista, um abaixo do outro, porém a idade deve estar na frente do nome. 
Exemplo:
 nome: Fulano   idade: 20
 nome: Beltrano   idade: 22
 nome: Ciclano   idade: 19
 nome: Jhon Doe   idade: 30
- Vocês devem utilizar o métodos .map para renderizar. É necessário aplicar estilo a lista
- O Componente Header deverá receber um título por props, o renderizar no centro da View e estar com o texto em negrito.
- Os dois componente deverão ser usados em uma página, a qual será a responsável por passar o título para o Header e o array para a Lista.
*/