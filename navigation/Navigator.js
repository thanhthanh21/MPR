import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InputScreen from '../screen/InputScreen';
import GameScreen from '../screen/GameScreen';

import EndGame from '../screen/EndGameScreen';
const Stack = createNativeStackNavigator();
export default function Navigator(){
    return(
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Input" options={{title:"Number Guessing Game"}} component={InputScreen}/>
                <Stack.Screen name="Game" options={{title:"Number Guessing Game"}} component={GameScreen}/>
                <Stack.Screen name="EndGame" options={{title:"Number Guessing Game"}} component={EndGame}/>
            </Stack.Navigator>
        </NavigationContainer>

        
    )
}