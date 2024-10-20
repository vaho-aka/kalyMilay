import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import 'react-native-svg';
import RemixIcon from 'rn-remixicon';
import { Link } from 'expo-router';

export default function TopNavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Link href={'/(tabs)/account'} asChild>
          <TouchableOpacity>
            <Image
              source={require('@/assets/images/Avatar.jpg')}
              style={styles.image}
            />
          </TouchableOpacity>
        </Link>
        <Text style={styles.text}>Hi ! Vahoaka</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <RemixIcon name="shopping-cart2-line" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  text: {
    color: '#fff',
  },
  iconContainer: {
    backgroundColor: '#4FAE5A',
    borderRadius: 50,
    padding: 8,
  },
});
