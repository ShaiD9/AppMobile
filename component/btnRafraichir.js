import React from 'react';
import { View, Button } from 'react-native';

export default function btnRafraichir({ onPress }) {
    return (
        <View style={{marginBottom: 10}}>
            <Button color='#66ccff' title="Rafraîchir" onPress={onPress} />
        </View>
    );
}