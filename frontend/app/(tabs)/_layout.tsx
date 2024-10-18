import { Tabs } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: 'Home Screen' }} />
      <Tabs.Screen
        name="favorites"
        options={{ headerTitle: 'Favorites Screen' }}
      />
      <Tabs.Screen
        name="notifications"
        options={{ headerTitle: 'Notifications Screen' }}
      />
      <Tabs.Screen name="account" options={{ headerTitle: 'Account Screen' }} />
    </Tabs>
  );
}
