import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { FlatList } from 'react-native';
import { UserTokenContext } from '../Context/userTokenContext';
import BouttonRetour from '../component/btnRetour';
import BouttonRafraichir from '../component/btnRafraichir';

export default function DataAGENCE( { navigation } ) {
  const [data, setData] = useState([]); //permet de stocker les données de l'API dans une variable data

  const Retour = () => {
    navigation.navigate('Accueil')
  };

  const {userToken} = useContext(UserTokenContext);

  const handleData = () => {
    fetch('http://206.189.31.42:8000/api/agences')
    .then(response => response.json())
    .then(data => {
      if (data.status_code == 200) {
        setData(data.items); //permet de stocker les données de l'API dans la variable data
      } else {
        
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  useEffect(() => {
    handleData(); //permet d appeller la fonction handleData au chargement de la page
   }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text><Text style={styles.colonne}>Id : </Text>{item.id}</Text>
      <Text><Text style={styles.colonne}>Nom : </Text>{item.name}</Text>
      <Text><Text style={styles.colonne}>Addresse : </Text>{item.address}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Agences</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity style={styles.button}>
          <BouttonRafraichir onPress={handleData}/>
          <BouttonRetour onPress={Retour}/>
        </TouchableOpacity>
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
    height: 600,
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
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 6,
  },
  row: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  colonne: {
    fontWeight: 'bold',
  },
});
