// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from './pages/connexion.js';
import Accueil from './pages/accueil.js';
import Data from './pages/data.js';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Connexion" onPress={() => navigation.navigate('Connexion')}/>
//       <Button title="Accueil" onPress={() => navigation.navigate('Accueil')}/>
//       <Button title="Data" onPress={() => navigation.navigate('Data')}/>
//     </View>
//   );
// }

// function ConnexionScreen({ navigation }) {
//   return (
//     <Connexion />
//   );
// }

// function AccueilScreen({ navigation }) {
//   return (
//     <Accueil />
//   );
// }

// function DataScreen({ navigation }) {
//   return (
//     <Data />
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion">
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Data" component={Data} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;