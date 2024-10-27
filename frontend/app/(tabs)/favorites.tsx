import { StyleSheet, Text, View } from 'react-native';
import React, { memo, useCallback, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spinner from 'react-native-loading-spinner-overlay';
import { useAppSelector } from '@/hooks/useDispatch';
import { FoodItem } from '@/constants/interfaces';
import FoodCard from '@/components/FoodCard';
import CustomModal, { CustomModalRef } from '@/components/CustomModal';
import { FlashList } from '@shopify/flash-list';
import TopNavBar from '@/components/TopNavBar';
import FoodDetails from '@/components/FoodDetails';
import Cart from '@/components/Cart';

const MemoizedFoodCard = memo(FoodCard);

export default function favorites() {
  const detailModalRef = useRef<CustomModalRef>(null);
  const cartModalRef = useRef<CustomModalRef>(null);

  const { loading } = useAppSelector((state) => state.foods);
  const { favorites } = useAppSelector((state) => state.cart);

  const renderItem = useCallback(({ item }: { item: FoodItem }) => {
    return <MemoizedFoodCard item={item} onPress={detailsModalHandler} />;
  }, []);

  const detailsModalHandler = () => {
    detailModalRef.current?.present();
  };

  const cartModalHandler = () => {
    cartModalRef.current?.present();
  };

  return (
    <SafeAreaView style={{ flex: 1, gap: 10 }}>
      <Spinner visible={loading} />
      <TopNavBar onPress={cartModalHandler} />
      <Text style={styles.mesFavorites}>Mes Favorites</Text>
      <FlashList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item, index) => item._id || `loading-${index}`}
        contentContainerStyle={styles.container}
        estimatedItemSize={40}
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
    paddingHorizontal: 16,
  },
  mesFavorites: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    overflow: 'hidden',
    fontSize: 18,
    textAlign: 'center',
  },
});
