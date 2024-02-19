import { auto } from 'eol';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Connexion from './pages/connexion.js';
import Accueil from './pages/accueil.js';
import Data from './pages/data.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Connexion /> */}
      <Accueil />
      <Data />
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
});
