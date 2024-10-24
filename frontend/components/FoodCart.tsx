import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useMemo } from 'react';
import CustomImage from './CustomImage';
import RemixIcon from 'rn-remixicon';

type Props = {
  title: string;
  price: number;
};

const PlaceholderImage = require('@/assets/images/3.jpg');

export default function FoodCart({ title, price }: Props) {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQtyHandler = () => {
    setQuantity((qty) => qty + 1);
  };

  const decreaseQtyHandler = () => {
    setQuantity((qty) => (qty === 1 ? qty : qty - 1));
  };

  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      maximumFractionDigits: 0,
    }).format(price);
  }, [price]);

  return (
    <View style={styles.container} accessible={true} accessibilityRole="button">
      <CustomImage
        source={PlaceholderImage}
        wrapper={styles.imageContainer}
        image={styles.image}
      />

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formattedPrice}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 8,
  },
  pressed: {
    opacity: 0.95,
    transform: [{ scale: 0.995 }],
  },
  imageContainer: {
    width: 120,
    height: 120,
    position: 'relative',
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
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 120,
    height: 120,
  },
  contentContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    flex: 1,
    marginRight: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
    marginRight: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4FAE5A',
  },
  addButton: {
    backgroundColor: '#4FAE5A',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
