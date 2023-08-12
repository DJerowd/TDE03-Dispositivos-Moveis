import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ backgroundColor }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePress = () => {
    fetchData();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, { backgroundColor }]}>
        {data ? (
          <View>
            <Text style={styles.text}>Tamanho: {data.length} </Text>
            <Text style={styles.text}>Fato: {data.fact}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    borderRadius: 10,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    color: '#070015',
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#070015',
  }
});

export default Card;


