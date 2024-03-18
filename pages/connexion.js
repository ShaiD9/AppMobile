import { auto } from 'eol';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Connexion({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>FDR_Mobile - Connexion</Text>
        <Text style={styles.label}>Nom d'utilisateur :</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.label}>Mot de passe :</Text>
        <TextInput style={styles.input} placeholder="" secureTextEntry={true} />
        <Button color='#3333ff' title="Connexion" onPress={() => navigation.navigate('Accueil')} />
      </View>
    </View>
  );
}

const ConnexionAlert = () => {
    alert('Connexion effectué avec succès');
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
  },
  label: {
    fontSize: 16,
  },
});
