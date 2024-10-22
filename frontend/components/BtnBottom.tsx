import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Children, PropsWithChildren } from 'react';
import RemixIcon from 'rn-remixicon';
import 'react-native-svg';

type Props = PropsWithChildren<{
  label: string;
}>;

export default function BtnBottom({ label }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartBtn}>
        <RemixIcon name="shopping-cart2-line" size={30} color="#fff" />
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fovoriteBtn}>
        <RemixIcon name="heart3-line" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    zIndex: 2,
    left: 10,
    right: 10,
    flexDirection: 'row',
    gap: 10,
  },
  cartBtn: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  fovoriteBtn: {
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 10,
  },
});
