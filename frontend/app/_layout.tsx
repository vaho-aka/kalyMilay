import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
    </>
  );
}
