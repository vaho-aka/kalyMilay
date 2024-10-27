import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import 'react-native-svg';
import RemixIcon from 'rn-remixicon';
import { Link } from 'expo-router';
import CustomImage from './CustomImage';
import { getImageUrl } from '@/constants/api';
import { useUser } from '@clerk/clerk-expo';

type Props = {
  onPress: () => void;
};

export default function TopNavBar({ onPress }: Props) {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Link href={'/(tabs)/account'} asChild>
          <TouchableOpacity>
            <CustomImage
              source={{ uri: getImageUrl('/api/v1/uploads/users/avatar.jpg') }}
              wrapper={styles.imageWrapper}
              image={styles.image}
            />
          </TouchableOpacity>
        </Link>
        <Text style={styles.text}>
          Hi, {user?.emailAddresses[0].emailAddress.split('@')[0]} !
        </Text>
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
    fontSize: 20,
  },
  iconContainer: {
    backgroundColor: '#4FAE5A',
    borderRadius: 50,
    padding: 8,
  },
});
