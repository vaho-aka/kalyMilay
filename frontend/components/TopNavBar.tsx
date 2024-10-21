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

const Avatar = require('@/assets/images/Avatar.jpg');

export default function TopNavBar() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Determine if we should show loading indicator based on platform
  const shouldShowLoading = Platform.OS !== 'web' && isLoading && !imageError;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Link href={'/(tabs)/account'} asChild>
          <TouchableOpacity>
            <View style={styles.imageWrapper}>
              {shouldShowLoading && (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="small" color="#4FAE5A" />
                </View>
              )}
              <Image
                source={Avatar}
                style={[styles.image, Platform.OS === 'web' && styles.webImage]}
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
                onError={() => {
                  setImageError(true);
                  setIsLoading(false);
                }}
              />
            </View>
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
  webImage: {
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    zIndex: 1,
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
