import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View,ImageBackground,Alert,BackHandler } from 'react-native';
import Button from '../components/Button';

export default function InputScreen({ navigation }) {
    const [number, setNumber] = useState('');


    const validation = (number) => {
        const inputNumber=parseInt(number);
        if (inputNumber > 0 && inputNumber <= 100) {
            navigation.navigate('Game', { data: inputNumber });
        } else {
            alert("Please enter a number between 1 and 100");
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} style={styles.background} />
            <StatusBar style="auto" />
            <Text style={styles.title}>Guessing Number</Text>
            <Text style={styles.body}>Please enter a number from 01 to 99:</Text>
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                placeholder="Enter a number"
                onChangeText={(number) => setNumber(number)}
                // value={number}
            />
            <Button title="Play" styles={styles.button} onPress={() => validation(number)} />
            <Button title="Quit" styles={styles.button} onPress={() => {
                    Alert.alert(
                        'Are you leaving?',
                        'You leaving me????',
                        [
                          { text: 'No, I am not leaving' },
                          {text: 'Yes, I am leaving', onPress: () => BackHandler.exitApp()}
                        ]
                    )}} />     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity:0.5
        // Additional styling for background, similar to MenuScreen
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
        top:'10%'
    },
    body:{
        fontSize: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        top:'25%'
    },
    input: {
        width: 200,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        top:'25%'
    },
    button: {
        backgroundColor: '#FF6F61',
        borderRadius: 10,
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        top:'25%',
        marginBottom:20,
        marginTop:20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
