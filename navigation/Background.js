import { ImageBackground } from 'react-native';
export default function Background({children}) {
    return (
        <ImageBackground source={require('../assets/background.jpg')}>
            {children}
        </ImageBackground>
        );
}