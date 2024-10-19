import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

type Props = {
  idx: number;
};

export default function FoodCard(props: Props) {
  return (
    <Link href="/foodDetails" asChild>
      <Pressable style={styles.container}>
        <Image source={require(`@/assets/images/3.jpg`)} style={styles.image} />
        <View>
          <Text>hello</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flex: 1,
    padding: 10,
    gap: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
