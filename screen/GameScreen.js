import { StatusBar, StyleSheet, Text, View,ImageBackground,FlatList, BackHandler, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
export default function GameScreen({ navigation, route }) {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100));
    const [lowest, setLowest] = useState(1);
    const [highest, setHighest] = useState(100);
    const [guessHistory, setGuessHistory] = useState([]);
    const [bingo, setBingo] = useState(false);
    const myNumber = route.params.data;
    function generateRandomNumber(number, buttonType) {
        if (buttonType === "Lower") {
            const randomNumber = Math.floor(Math.random() * (number - lowest)) + lowest;
            setHighest(number);
            setNumber(randomNumber);
        } else if (buttonType === "Greater") {
            const randomNumber = Math.floor(Math.random() * (highest - number)) + number;
            setLowest(number);
            setNumber(randomNumber);
        }
        guessHistory.push(number);
    }
    function disableButton(number, buttonType) {
        if (buttonType === "Lower" && number <= myNumber||bingo===true) {
            return true;
        }
        if (buttonType === "Greater" && number >= myNumber||bingo===true ) {
            return true;
        }
        
        return false;
    }
    function handleBingoPressed(){
        if(number==myNumber){
            setBingo(true);
        guessHistory.push(number);
            Alert.alert(
                'Yay!',
                'I got the correct answer, I am the best!',
                [
                  { text: 'Play Again', onPress: () => navigation.navigate('Input') },
                  {text: 'Quit', onPress: () => BackHandler.exitApp()}
                ]
              );
    }
        else {
            
                Alert.alert(
                  'Do not lie to me!',
                  'Seems like you are lying to me, you will be punished!',
                  [
                    { text: 'Liar!!!!', onPress: () => BackHandler.exitApp()} // Add your action here
                  ]
                );
              };
        
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} style={styles.background} />
            <StatusBar style="auto" />
            <Text style={styles.title}>Guessing Number</Text>
            <Text style={styles.title}>Opponent's Guess</Text>
            <Text style={styles.guess}>{number}</Text>
            <View style={styles.content}>
            <Text style={styles.title}>Higher or Lower</Text>
            <View style={styles.buttonContainer}>
                <Button title="-" styles={
                    disableButton(number, "Lower")
                        ? styles.buttonDisabled
                        : styles.button // Apply disabled styles conditionally
                } disabled={disableButton(number, "Lower")} onPress={() => generateRandomNumber(number, "Lower")} />
                <Button title="Bingo!" styles={bingo?styles.buttonDisabled:styles.button} disabled={bingo} onPress={() => {
                    handleBingoPressed();
                }} />
                <Button title="+" styles={
                    disableButton(number, "Greater")
                        ? styles.buttonDisabled
                        : styles.button // Apply disabled styles conditionally
                } disabled={disableButton(number, "Greater")} onPress={() => generateRandomNumber(number, "Greater")} />
            </View>
            </View>
           
            <FlatList
                style={styles.listContainer}

                data={guessHistory}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>Attempt {index + 1}: {item}</Text>
                    </View>
                )}
            />
            <View style={styles.buttonContainer}>
                <Button title="Play Again" styles={styles.button} onPress={() => navigation.navigate('Input')} />
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
    background:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity:0.5
    },
    content:{
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:30
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingLeft:20,
        paddingRight:20,
    },
        title: {
        fontSize: 24,
        marginBottom: 20,
        marginTop:20,
    },
    guess: {
        fontSize: 40,
        margin: 20,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 80,
        paddingRight: 80,
        borderWidth: 1,

    },

    button: {
        backgroundColor: '#FF6F61',
        borderRadius: 10,
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop:20,
    },
    buttonDisabled: {
        backgroundColor: '#FF6F61',
        borderRadius: 10,
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop:20,
        opacity: 0.5
    },
    listContainer: {
        width: '80%',
        flex: 1,
        marginTop: 20,
    },

    list: {
        flexGrow: 1,
    },
    listItem: {
        backgroundColor: 'orange',
        paddingTop: 20,
        paddingLeft: 80,
        paddingRight: 80,
        paddingBottom: 20,
        marginVertical: 10,
        borderRadius: 10,
    },
    listItemText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});