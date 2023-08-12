import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch('http://universities.hipolabs.com/search?country=Brazil')
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.url}>{item.web_pages[0]}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={universities}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200E3F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#C0C0C0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    color: '#3B0099',
    fontWeight: 'bold',
  },
  url: {
    color: '#5538C1',
  },
});

export default App;
/*
4. Criar um app que:
- Realize a requisição para a API http://universities.hipolabs.com/search?country=Brazil
Links to an external site.
- Renderize em formato de lista o resultado da request, exibindo: o nome da universidade e a URL para seu site
*/