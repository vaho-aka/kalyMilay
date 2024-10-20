import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';

type Props = {
  onPressHandler: ((event: GestureResponderEvent) => void) | null | undefined;
  text: string;
};

export default function MainButton(props: Props) {
  return (
    <Pressable style={styles.button} onPress={props.onPressHandler}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4FAE5A',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
