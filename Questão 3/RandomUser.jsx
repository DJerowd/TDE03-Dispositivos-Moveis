import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Button, StyleSheet } from 'react-native';

const RandomUser = () => {
  const [userData, setUserData] = useState(null);


  const fetchUserData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleRefresh = () => {
    fetchUserData();
  };

  

  return (
    <SafeAreaView style={styles.container}>
      {userData ? (
        <View style={styles.randomUser}>

          <Text style={styles.text}>Nome: {`${userData.name.first} ${userData.name.last}`}</Text>
          <Text style={styles.text}>Sexo: {userData.gender}</Text>
          <Text style={styles.text}>Email: {userData.email}</Text>
          <Text style={styles.text}>Cidade: {userData.location.city}</Text>
          <Text style={styles.text}>Estado: {userData.location.state}</Text>
          <Text style={styles.text}>País: {userData.location.country}</Text>

        </View>
      ) : null}
      <Button title="Atualizar Dados" onPress={handleRefresh} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 200,
    marginTop: 200,
  },
  randomUser: {
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0482C9',
    marginHorizontal: 18,
    marginVertical: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0482C9',
  }
});

export default RandomUser;