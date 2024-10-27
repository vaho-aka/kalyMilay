import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { memo, useCallback, useMemo } from 'react';
import RemixIcon from 'rn-remixicon';
import FoodCart from './FoodCart';
import { CartItem, FoodItem } from '@/constants/interfaces';
import { useAppSelector } from '@/hooks/useDispatch';
import { FlashList } from '@shopify/flash-list';
import { useAuth } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';

const MemoizedFoodCard = memo(FoodCart);

export default function Cart() {
  const { dishes, totalAmount } = useAppSelector((state) => state.cart);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const renderItem = useCallback(({ item }: { item: CartItem }) => {
    return <MemoizedFoodCard food={item.food} amount={item.amount} />;
  }, []);

  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      maximumFractionDigits: 0,
    }).format(totalAmount);
  }, [totalAmount]);

  const formattedTotalPrice = useMemo(() => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      maximumFractionDigits: 0,
    }).format(totalAmount + 2000);
  }, [totalAmount]);

  const handleAction = () => {
    if (!isSignedIn) {
      router.push('/(auth)/login');
      return;
    }
    // Proceed with protected action
    router.replace('/(protected)/checkout');
  };

  return (
    <View style={styles.container}>
      <FlashList
        data={dishes}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.food._id || `loading-${index}`}
        contentContainerStyle={styles.listContainer}
        estimatedItemSize={30}
      />
      <View style={styles.checkoutContainer}>
        <View style={styles.separator}>
          <View
            style={{
              height: 5,
              width: 100,
              backgroundColor: '#1e1e1e',
              borderRadius: 50,
            }}
          ></View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <Text>Prix de la commande</Text>
            <Text>{formattedPrice}</Text>
          </View>
          <View style={styles.price}>
            <Text>Frais de livraison</Text>
            <Text>2 000 Ar</Text>
          </View>
          <View style={styles.price}>
            <Text>Totalité</Text>
            <Text>{formattedTotalPrice}</Text>
          </View>
        </View>

        <Link
          href={!isSignedIn ? '/(auth)/login' : '/(protected)/checkout'}
          asChild
        >
          <TouchableOpacity style={styles.cartBtn} onPress={handleAction}>
            <Text style={styles.text}>
              {isSignedIn ? 'Commander' : 'Se connecter'}
            </Text>
            <View style={styles.iconContainer}>
              <RemixIcon name="arrow-right-line" size={30} color="#1e1e1e" />
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    gap: 10,
  },
  listContainer: {
    padding: 10,
  },
  checkoutContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    overflow: 'hidden',
  },
  separator: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    paddingBottom: 5,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  cartBtn: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    backgroundColor: '#fff',
    width: '30%',
    paddingVertical: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
