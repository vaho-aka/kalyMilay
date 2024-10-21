import FoodCard from '@/components/FoodCard';
import TopNavBar from '@/components/TopNavBar';
import { FoodItem } from '@/constants/type';
import React, { useState, memo, useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { foodItems } from './../../constants/foodData';

const MemoizedFoodCard = memo(FoodCard);

export default function Index() {
  const renderItem = useCallback(
    ({ item }: { item: FoodItem }) => (
      <MemoizedFoodCard
        title={item.title}
        description={item.description}
        price={item.price}
        rating={item.rating}
      />
    ),
    []
  );

  const listHeaderComponent = () => (
    <View style={styles.boxContainer}>
      <View>
        <Text style={styles.boxTextHero}>Commandez vos plats</Text>
        <Text style={styles.boxTextHero}>
          préférez sans quitter votre salon
        </Text>
      </View>
      <Text style={styles.boxTextButton}>Commandez dès maintenant</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavBar />
      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.container}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
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
