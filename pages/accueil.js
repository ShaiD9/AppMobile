import { auto } from 'eol';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert  } from 'react-native';

export default function Accueil({ navigation }) {
  const DataAlert = () => {
    alert('Redirection vers la page Data');
  };

  const Deconnection = () => {
    Alert.alert(
        "Déconnection",
        "Voulez-vous vraiment vous déconnecter ?",
        [
            {
              text: "OK", 
                onPress: () => {
                alert('Vous avez été déconnecté avec succès');
                navigation.navigate('Connexion')
            },
            },
            { 
              text: "Cancel",
              style: "cancel"
            }
        ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>FDR_Mobile - Accueil</Text>
        <TouchableOpacity activeOpacity={1} style={styles.button}>
            <Button color='#3399ff' marginBottom='' title="Data" onPress={DataAlert} />
        </TouchableOpacity>
        <Button color='#3333ff' title="Déconnection" onPress={Deconnection} />
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
  button: {
    height: 50,
    backgroundColor: '3399ff',
    marginTop: 20,
    marginBottom: 20,
  },
});
