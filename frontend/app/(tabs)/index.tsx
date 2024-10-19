import FoodCard from '@/components/FoodCard';
import TopNavBar from '@/components/TopNavBar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function index() {
  return (
    <>
      <TopNavBar />
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.boxContainer}>
            <View>
              <Text style={styles.boxTextHero}>Commandez vos plats</Text>
              <Text style={styles.boxTextHero}>
                préférez sans quitter votre salon
              </Text>
            </View>
            <Text style={styles.boxTextButton}>Commandez dès maintenant</Text>
          </View>
        </View>
        <View style={styles.foodListContainer}>
          {Array.from('irna').map((l, i) => (
            <FoodCard idx={i} key={i + l} />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  boxContainer: {
    backgroundColor: '#4FAE5A',
    borderRadius: 10,
    paddingTop: 60,
    padding: 15,
    flex: 1,
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
    borderRadius: 5,
    width: 200,
  },
  foodListContainer: {
    paddingVertical: 15,
    flex: 1,
    gap: 10,
  },
});
