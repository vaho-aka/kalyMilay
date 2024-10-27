import React, { useMemo, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import RemixIcon from 'rn-remixicon';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '@/hooks/useDispatch';
import { getImageUrl } from '@/constants/api';
import { cartActions } from '@/reducers/cartReducer';

export default function FoodDetails() {
  const [quantity, setQuantity] = useState<number>(1);
  const { food } = useAppSelector((state) => state.foods);
  const dispatch = useAppDispatch();

  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      maximumFractionDigits: 0,
    }).format(food.price);
  }, [food.price]);

  const increaseQtyHandler = () => {
    setQuantity((qty) => (qty < food.quantity ? qty + 1 : qty));
  };

  const decreaseQtyHandler = () => {
    setQuantity((qty) => (qty === 0 ? qty : qty - 1));
  };

  const addToCartHandler = () => {
    dispatch(cartActions.ADD_ITEM({ food, amount: quantity }));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: getImageUrl(food.image) }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.overlay}>
          <View style={styles.rateContainer}>
            <Text style={styles.foodName}>{food.title}</Text>
            <View style={styles.ratingContainer}>
              <MaterialIcons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{food.ratings}</Text>
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
              <Text style={styles.price}>{formattedPrice}</Text>
              <Text style={styles.timeText}>{food.category}</Text>
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
        <View>
          <Text style={styles.label}>{food.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cartBtn} onPress={addToCartHandler}>
          <RemixIcon name="shopping-cart2-line" size={30} color="#fff" />
          <Text style={styles.text}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fovoriteBtn}>
          <RemixIcon name="heart3-line" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollViewContent: {
    gap: 10,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  label: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
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
    width: 120,
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
  buttonContainer: {
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
