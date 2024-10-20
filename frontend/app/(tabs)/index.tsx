import CustomModal from '@/components/CustomModal';
import FoodCard from '@/components/FoodCard';
import FoodDetails from '@/components/FoodDetails';
import TopNavBar from '@/components/TopNavBar';
import { FoodItem } from '@/constants/type';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
} from 'react-native';

const foodItems: FoodItem[] = [
  {
    id: 'soup-001',
    title: 'Soupe Spéciale Complète',
    description:
      'A delicious hearty soup with fresh vegetables, tender meat, and aromatic herbs, perfect for a cold day.',
    price: 24000,
    rating: 4.5,
    reviewCount: 128,
    imageUrl: '@/assets/images/drinks/3.jpg',
    categoryId: 'soups',
    tags: ['popular', 'hot', 'comfort-food'],
    nutritionInfo: {
      calories: 320,
      protein: 15,
      carbs: 28,
      fat: 12,
    },
    preparationTime: 20,
    isAvailable: true,
    allergens: ['celery', 'gluten'],
  },
  {
    id: 'soup-002',
    title: 'Crème de Champignons',
    description:
      'Creamy mushroom soup made with a blend of forest mushrooms and fresh cream, garnished with herbs.',
    price: 22000,
    rating: 4.3,
    reviewCount: 95,
    imageUrl: '@/assets/images/drinks/3.jpg',
    categoryId: 'soups',
    tags: ['vegetarian', 'creamy'],
    nutritionInfo: {
      calories: 280,
      protein: 8,
      carbs: 22,
      fat: 18,
    },
    preparationTime: 15,
    isAvailable: true,
    isVegetarian: true,
    allergens: ['milk', 'gluten'],
  },
  {
    id: 'main-001',
    title: 'Poulet Grillé aux Herbes',
    description:
      'Grilled chicken marinated in fresh herbs and garlic, served with seasonal vegetables.',
    price: 35000,
    rating: 4.7,
    reviewCount: 156,
    imageUrl: '@/assets/images/drinks/3.jpg',
    categoryId: 'mains',
    tags: ['popular', 'protein-rich', 'healthy'],
    nutritionInfo: {
      calories: 450,
      protein: 32,
      carbs: 15,
      fat: 22,
    },
    preparationTime: 25,
    isAvailable: true,
  },
  {
    id: 'dessert-001',
    title: 'Tarte au Chocolat',
    description:
      'Rich chocolate tart made with premium dark chocolate and fresh cream, topped with cocoa powder.',
    price: 18000,
    rating: 4.8,
    reviewCount: 203,
    imageUrl: '@/assets/images/drinks/3.jpg',
    categoryId: 'desserts',
    tags: ['popular', 'sweet', 'chocolate'],
    nutritionInfo: {
      calories: 380,
      protein: 5,
      carbs: 42,
      fat: 24,
    },
    preparationTime: 10,
    isAvailable: true,
    isVegetarian: true,
    allergens: ['milk', 'eggs', 'gluten'],
  },
  {
    id: 'drink-001',
    title: 'Smoothie Tropical',
    description:
      'Refreshing blend of mango, pineapple, and passion fruit, topped with coconut flakes.',
    price: 15000,
    rating: 4.4,
    reviewCount: 87,
    imageUrl: '@/assets/images/drinks/3.jpg',
    categoryId: 'drinks',
    tags: ['refreshing', 'healthy', 'fruit'],
    nutritionInfo: {
      calories: 180,
      protein: 2,
      carbs: 38,
      fat: 1,
    },
    preparationTime: 5,
    isAvailable: true,
    isVegetarian: true,
  },
];

type Props = {
  item: FoodItem;
};

export default function index() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showModalHandler = () => {
    setShowModal((showModal) => !showModal);
  };

  const renderItem = ({ item }: { item: FoodItem }) => (
    <FoodCard
      title={item.title}
      description={item.description}
      price={item.price}
      rating={item.rating}
      onPress={showModalHandler}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavBar />
      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View style={styles.boxContainer}>
            <View>
              <Text style={styles.boxTextHero}>Commandez vos plats</Text>
              <Text style={styles.boxTextHero}>
                préférez sans quitter votre salon
              </Text>
            </View>
            <Text style={styles.boxTextButton}>Commandez dès maintenant</Text>
          </View>
        )}
        contentContainerStyle={styles.container}
      />
      <CustomModal isVisible={showModal} onClose={showModalHandler}>
        <FoodDetails onPress={showModalHandler} />
      </CustomModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 10,
  },
  boxContainer: {
    backgroundColor: '#4FAE5A',
    borderRadius: 16,
    paddingTop: 100,
    padding: 15,
    marginBottom: 10,
    gap: 15,
  },
  boxTextHero: {
    color: '#fff',
    fontSize: 26,
  },
  boxTextButton: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden',
    width: 220,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
