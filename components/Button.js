import { Pressable, Text,StyleSh } from 'react-native';
export default function Button(props) {
  return (
    <Pressable style={props.styles} disabled={props.disabled} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </Pressable>
  );
}