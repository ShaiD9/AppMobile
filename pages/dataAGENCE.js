import { auto } from 'eol';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import React, { useEffect } from 'react';

export default function DataAGENCE( { navigation } ) {
  const Retour = () => {
    navigation.navigate('Accueil')
  };

  const handleData = () => {
    fetch('http://206.189.31.42:8000/api/dataAGENCE', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.status_code == 200) {
        
      } else {
        //alert('Problème') debug
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  /*  useEffect(() => {
    handleData(); //permet d appeller la fonction handleData au chargement de la page
   }, []); */

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Agences</Text>
        <Button color='#3333ff' title="Refresh Data" onPress={handleData} />
        <Button color='#3333ff' title="Retour" onPress={Retour} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 325,
    width: 325,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
  },
  button: {
    height: 50,
    backgroundColor: '3399ff',
    marginTop: 20,
    marginBottom: 20,
  },
});
