import { Pressable, Text,StyleSheet } from 'react-native';
export default function Button(props) {
  const disable=props.disabled;
  return (
    <Pressable style={disable?styles.buttonDisabled:styles.button} disabled={disable} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth:3,
    marginTop:20,
},
buttonDisabled: {
    borderRadius: 10,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop:20,
    opacity: 0.5,
    borderWidth:3
},
});