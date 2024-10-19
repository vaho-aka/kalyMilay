import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import RemixIcon from 'rn-remixicon';
import { Link } from 'expo-router';

export default function TopNavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Link href={'/(tabs)/account'} asChild>
          <Pressable>
            <Image
              source={require('@/assets/images/Avatar.jpg')}
              style={styles.image}
            />
          </Pressable>
        </Link>
        <Text>Hi ! Vahoaka</Text>
      </View>
      <Link href={'/cart'} asChild>
        <Pressable>
          <RemixIcon name="shopping-cart-2-line" size={30} />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 5,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
});
