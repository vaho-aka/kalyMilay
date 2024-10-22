import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BtnBottom from '@/components/BtnBottom';
import { MaterialIcons } from '@expo/vector-icons';
import RemixIcon from 'rn-remixicon';

const PlaceholderImage = require('@/assets/images/3.jpg');

export default function FoodDetails() {
  const [quantity, setQuantity] = useState<number>(0);

  const increaseQtyHandler = () => {
    setQuantity((qty) => qty + 1);
  };

  const decreaseQtyHandler = () => {
    setQuantity((qty) => (qty === 0 ? qty : qty - 1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <Text style={styles.label}>
            Une délicieuse soupe copieuse avec des légumes frais, de la viande
            tendre et herbes aromatiques, parfaites pour une journée froide.
          </Text>
        </View>

        <View style={styles.overlay}>
          <View style={styles.rateContainer}>
            <Text style={styles.foodName}>Soupe Spéciale Complète</Text>
            <View style={styles.ratingContainer}>
              <MaterialIcons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>4.5</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={styles.infoContainer}>
              <Text style={styles.price}>24 000 Ar</Text>
              <Text style={styles.timeText}>• 10 minutes</Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={decreaseQtyHandler}>
                <RemixIcon name="subtract-line" color="#1e1e1e" />
              </TouchableOpacity>
              <Text style={styles.btnText}>{quantity}</Text>
              <TouchableOpacity style={styles.btn} onPress={increaseQtyHandler}>
                <RemixIcon name="add-line" color="#1e1e1e" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <BtnBottom label="Add To Cart" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    gap: 10,
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  label: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    color: '#fff',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    borderRadius: 10,
    overflow: 'hidden',
    gap: 10,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFB800',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    marginRight: 10,
    backgroundColor: '#4FAE5A',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  timeText: {
    fontSize: 14,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 5,
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
