import { auto } from 'eol';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function Connexion({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleConnection = () => {
    fetch('http://206.189.31.42:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.status_code == 200) {
        navigation.navigate('Accueil');
      } else {
        //ConnectionAlertFail();
        navigation.navigate('Accueil');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Connexion</Text>
        <Text style={styles.label}>Nom d'utilisateur :</Text>
        <TextInput style={styles.input} placeholder="" onChangeText={text => setUsername(text)}/>
        <Text style={styles.label}>Mot de passe :</Text>
        <TextInput style={styles.input} placeholder=""  secureTextEntry={true} onChangeText={text => setPassword(text)}/>
        <Button color='#3333ff' title="Connexion" onPress={handleConnection} />
      </View>
    </View>
  );
}

const ConnectionAlertFail = () => {
  alert('Nom d\'utilisateur ou mot de passe incorrecte');
};

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
    height: auto,
    width: 300,
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
});
