import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lista = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>{`Nome: ${item.name}   |   Idade: ${item.idade}`}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#040008',
    borderRadius: 8,
    fontWeight: 'bold',
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#9D6D04',
  },
});

export default Lista;