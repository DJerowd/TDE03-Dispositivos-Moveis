import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#040008',
    borderRadius: 8,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#9D6D04',
  },
});

export default Header;