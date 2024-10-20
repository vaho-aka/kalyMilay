import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RemixIcon from 'rn-remixicon';
import 'react-native-svg';

type Props = {
  onPress: () => void;
};

export default function FoodDetails({ onPress }: Props) {
  return (
    <ScrollView style={styles.container}>
      <Text>FoodDetails</Text>
      <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
        <RemixIcon name="shopping-cart2-line" size={30} color="#fff" />
        <Text style={styles.text}>Add To Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  btnContainer: {
    position: 'absolute',
    bottom: -680,
    left: 16,
    right: 16,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 24,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
