import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerLeft: () => <></>,
        }}
      />
    </Stack>
  );
}
