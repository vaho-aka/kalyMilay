import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  StatusBar.setBarStyle('dark-content', true);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#1e1e1e" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="login"
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
        <Stack.Screen name="details" options={{ presentation: 'modal' }} />
      </Stack>
    </>
  );
}
