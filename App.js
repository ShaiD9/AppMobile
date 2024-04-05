import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from './pages/connexion.js';
import Accueil from './pages/accueil.js';
import DataFDR from './pages/dataFDR.js';
import DataAGENCE from './pages/dataAGENCE.js';
import DataAGENT from './pages/dataAGENT.js';
import DataVEHICULE from './pages/dataVEHICULE.js';
import { UserTokenContext } from './Context/userTokenContext.js';

const Stack = createNativeStackNavigator();

function App() {
  const [userToken, setToken] = useState("trdt"); //permet de stocker le token dans une variable token

  return (
    <UserTokenContext.Provider value={{userToken,setToken}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Connexion" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name="Accueil" component={Accueil} />
          <Stack.Screen name="DataFDR" component={DataFDR} />
          <Stack.Screen name="DataAGENCE" component={DataAGENCE} />
          <Stack.Screen name="DataAGENT" component={DataAGENT} />
          <Stack.Screen name="DataVEHICULE" component={DataVEHICULE} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserTokenContext.Provider>

  );
}

export default App;