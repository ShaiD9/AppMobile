import { auto } from 'eol';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert  } from 'react-native';

export default function Accueil({ navigation }) {
  const DataFDR = () => {
    navigation.navigate('DataFDR')
  };
  const DataAGENCE = () => {
    navigation.navigate('DataAGENCE')
  };
  const DataAGENT = () => {
    navigation.navigate('DataAGENT')
  };
  const DataVEHICULE = () => {
    navigation.navigate('DataVEHICULE')
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
        <Text style={styles.title}>Accueil</Text>
        <TouchableOpacity activeOpacity={1} style={styles.button}>
            <View style={{marginBottom: 10}}>
            <Button color='#3399ff' title="AGENCE" onPress={DataAGENCE} />
            </View>
            <View style={{marginBottom: 10}}>
            <Button color='#3399ff' title="AGENT" onPress={DataAGENT} />
            </View>
            <View style={{marginBottom: 10}}>
            <Button color='#3399ff' title="FDR" onPress={DataFDR} />
            </View>
            <View style={{marginBottom: 10}}>
            <Button color='#3399ff' title="VEHICULE" onPress={DataVEHICULE} />
            </View>
            <View style={{marginTop: 15}}>
            <Button color='#3333ff' title="Déconnection" onPress={Deconnection} />
            </View>
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
    borderRadius: 6,
  },
});
