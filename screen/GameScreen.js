import { StatusBar, StyleSheet, Text, View,ImageBackground,FlatList, BackHandler, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
export default function GameScreen({ navigation, route }) {
    const [number, setNumber] = useState(Math.floor(Math.random() * (100-1))+1);
    const [lowest, setLowest] = useState(1);
    const [highest, setHighest] = useState(100);
    const [guessHistory] = useState([]);
    const myNumber = route.params.data;
    useEffect(() => {
        generateRandomNumber(lowest,highest);
    }, [lowest,highest]);
    function generateRandomNumber(min,max){
        setNumber(Math.floor(Math.random() * (max - min) + min));
    }
    function disableButton(number, buttonType) {
        if (buttonType === "Lower" && number <= myNumber) {
            return true;
        }
        if (buttonType === "Greater" && number >= myNumber ) {
            return true;
        }
        
        return false;
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
                } disabled={disableButton(number, "Lower")} onPress={()=>{setHighest(number);guessHistory.push(number)}} />
                <Button title="Bingo!" styles={styles.button} onPress={() => {
                    guessHistory.push(number);
                    navigation.navigate('EndGame', {data: guessHistory.length,number:number});
}} />
                <Button title="+" styles={
                    disableButton(number, "Greater")
                        ? styles.buttonDisabled
                        : styles.button // Apply disabled styles conditionally
                } disabled={disableButton(number, "Greater")} onPress={()=>{setLowest(number+1);guessHistory.push(number)}} />
            </View>
            </View>
           
            <FlatList
                style={styles.listContainer}

                data={guessHistory}
                keyExtractor={(index) => index.toString()}
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
                        'Exit app',
                        'Are you sure you want to exit?',
                        [
                          { text: 'No' },
                          {text: 'Yes', onPress: () => BackHandler.exitApp()}
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
        fontWeight: 'bold',
    },
    body:{
        fontSize: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
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