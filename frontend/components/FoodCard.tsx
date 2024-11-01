import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useMemo } from 'react';
import CustomImage from './CustomImage';
import { getImageUrl } from '@/constants/api';
import { foodActions } from '@/reducers/foodReducer';
import { useAppDispatch } from '@/hooks/useDispatch';
import { FoodItem } from '@/constants/interfaces';

type Props = {
  item: FoodItem;
  onPress: () => void;
};

export default function FoodCard({ item, onPress }: Props) {
  const dispatch = useAppDispatch();

  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      maximumFractionDigits: 0,
    }).format(item.price);
  }, [item.price]);

  const ratingDisplay = useMemo(() => {
    return item.ratings.toFixed(1);
  }, [item.ratings]);

  const showFoodDetailsHandler = () => {
    dispatch(foodActions.GET_FOOD_BY_ID_SUCCESS(item));

    onPress();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      accessible={true}
      accessibilityLabel={`${item.title}, ${formattedPrice}, Rating ${ratingDisplay} out of 5`}
      accessibilityRole="button"
      onPress={showFoodDetailsHandler}
    >
      <CustomImage
        source={{ uri: getImageUrl(item.image) }}
        wrapper={styles.imageContainer}
        image={styles.image}
      />

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{ratingDisplay}</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formattedPrice}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
  buttonPressed: {
    backgroundColor: '#3d8a48',
  },
});
