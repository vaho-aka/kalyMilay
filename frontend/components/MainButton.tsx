import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';

export default function MainButton(props: {
  onPressHandler: ((event: GestureResponderEvent) => void) | null | undefined;
  text: string;
}) {
  return (
    <Pressable style={styles.button} onPress={props.onPressHandler}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4FAE5A',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
