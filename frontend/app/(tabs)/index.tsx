import FoodCard from '@/components/FoodCard';
import TopNavBar from '@/components/TopNavBar';
import { FoodItem } from '@/constants/type';
import React, { useState, memo, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { foodItems } from './../../constants/foodData';
import CustomModal from '@/components/CustomModal';
import FoodDetails from '@/components/FoodDetails';

const MemoizedFoodCard = memo(FoodCard);

export default function Index() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const renderItem = useCallback(
    ({ item }: { item: FoodItem }) => (
      <MemoizedFoodCard
        title={item.title}
        description={item.description}
        price={item.price}
        rating={item.rating}
        onPress={modalHanlder}
      />
    ),
    []
  );

  const modalHanlder = () => {
    setShowModal((showModal) => !showModal);
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
      {showModal && (
        <TouchableOpacity
          onPress={modalHanlder}
          style={styles.overlay}
        ></TouchableOpacity>
      )}
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
      <CustomModal onClose={modalHanlder} isVisible={showModal}>
        <FoodDetails />
      </CustomModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 10,
    position: 'relative',
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
