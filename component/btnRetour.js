import React from 'react';
import { View, Button } from 'react-native';

export default function btnRetour({ onPress }) {
  return (
    <View style={{}}>
      <Button color='#666666' title="Retour" onPress={onPress} />
    </View>
  );
}