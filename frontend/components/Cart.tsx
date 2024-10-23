import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RemixIcon from 'rn-remixicon';
import FoodCart from './FoodCart';

export default function Cart() {
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Text style={styles.cartText}>Mon panier</Text>
      </View>

      <View style={styles.listContainer}>
        <FoodCart title="Soupe special" price={4000} />
      </View>
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
            <Text>24 000 Ar</Text>
          </View>
          <View style={styles.price}>
            <Text>Frais de livraison</Text>
            <Text>3 000 Ar</Text>
          </View>
          <View style={styles.price}>
            <Text>Totalité</Text>
            <Text>27 000 Ar</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.text}>Commander</Text>
          <View style={styles.iconContainer}>
            <RemixIcon name="arrow-right-line" size={30} color="#1e1e1e" />
          </View>
        </TouchableOpacity>
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
  cart: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  cartText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e1e1e',
  },
  listContainer: {
    flex: 1,
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
