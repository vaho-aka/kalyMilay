import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import React, { useState } from 'react';

type Props = {
  source: ImageSourcePropType;
  wrapper: {};
  image: {};
};

export default function CustomImage({ source, wrapper, image }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Determine if we should show loading indicator based on platform
  const shouldShowLoading = Platform.OS !== 'web' && isLoading && !imageError;

  return (
    <View style={wrapper}>
      {shouldShowLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#4FAE5A" />
        </View>
      )}
      <Image
        source={source}
        style={[image, Platform.OS === 'web' && styles.webImage]}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => {
          setImageError(true);
          setIsLoading(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    zIndex: 2,
  },
});
