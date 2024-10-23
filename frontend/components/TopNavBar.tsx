import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import 'react-native-svg';
import RemixIcon from 'rn-remixicon';
import { Link } from 'expo-router';
import CustomImage from './CustomImage';

type Props = {
  onPress: () => void;
};

const Avatar = require('@/assets/images/Avatar.jpg');

export default function TopNavBar({ onPress }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Link href={'/(tabs)/account'} asChild>
          <TouchableOpacity>
            <CustomImage
              source={Avatar}
              wrapper={styles.imageWrapper}
              image={styles.image}
            />
          </TouchableOpacity>
        </Link>
        <Text style={styles.text}>Hi ! Vahoaka</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
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
  imageWrapper: {
    position: 'relative',
    height: 70,
    width: 70,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
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
