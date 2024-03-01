import React from 'react';
import { View, Text, BackHandler, StyleSheet, ImageBackground } from 'react-native';
import Button from '../components/Button';
export default function EndGame(navigation,route) {
    const { guesses } = route.params;

    const handlePlayAgain = () => {
        navigation.navigate('Input');
    };

    const handleQuitApp = () => {
        BackHandler.exitApp();
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} style={styles.background} />
            <Text style={styles.text}>Number of Guesses: {guesses}</Text>
            <Button styles={styles.button} title="Play Again" onPress={() => handlePlayAgain()} />
            <Button styles={styles.button} title="Quit" onPress={() => handleQuitApp()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    background:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity:0.5
    },
});

