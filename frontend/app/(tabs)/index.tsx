import FoodCard from '@/components/FoodCard';
import TopNavBar from '@/components/TopNavBar';
import { FoodItem } from '@/constants/type';
import React, { useState, memo, useCallback, useRef, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomModal, { CustomModalRef } from '@/components/CustomModal';
import FoodDetails from '@/components/FoodDetails';
import { FlashList } from '@shopify/flash-list';
import Cart from '@/components/Cart';
import { useAppDispatch, useAppSelector } from '@/hooks/useDispatch';
import { getDishes } from '@/actions/foodActions';

const MemoizedFoodCard = memo(FoodCard);

export default function Index() {
  const detailModalRef = useRef<CustomModalRef>(null);
  const cartModalRef = useRef<CustomModalRef>(null);
  const { foods } = useAppSelector((state) => state.foods);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: FoodItem }) => (
      <MemoizedFoodCard
        title={item.title}
        description={item.description}
        price={item.price}
        rating={item.ratings}
        onPress={detailsModalHandler}
      />
    ),
    []
  );

  const detailsModalHandler = () => {
    detailModalRef.current?.present();
  };

  const cartModalHandler = () => {
    cartModalRef.current?.present();
  };

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
      <TopNavBar onPress={cartModalHandler} />
      <FlashList
        data={foods}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.container}
        estimatedItemSize={30}
      />
      <CustomModal ref={detailModalRef}>
        <FoodDetails />
      </CustomModal>
      <CustomModal ref={cartModalRef}>
        <Cart />
      </CustomModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
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
    fontSize: 24,
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
