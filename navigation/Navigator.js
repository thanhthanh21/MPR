import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MenuScreen from '../screen/MenuScreen';
import InputScreen from '../screen/InputScreen';
import GameScreen from '../screen/GameScreen';
// import GameOver from '../screen/GameOver';
// import HowToPlay from '../screen/HowToPlay';
import { ImageBackground,View } from 'react-native';
const Stack = createNativeStackNavigator();
export default function Navigator(){
    return(
            <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Menu" options={{title:"Number Guessing Game"}} component={MenuScreen}/> */}
                <Stack.Screen name="Input" options={{title:"Number Guessing Game"}} component={InputScreen}/>
                <Stack.Screen name="Game" options={{title:"Number Guessing Game"}} component={GameScreen}/>
                {/* <Stack.Screen name="GameOver" options={{title:"Number Guessing Game"}} component={GameOver}/>
                <Stack.Screen name="HowToPlay" options={{title:"Number Guessing Game"}} component={HowToPlay}/> */}
            </Stack.Navigator>
        </NavigationContainer>

        
    )
}