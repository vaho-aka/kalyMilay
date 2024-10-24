import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function RootLayout() {
  StatusBar.setBarStyle('dark-content', true);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
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
            <Stack.Screen
              name="settings"
              options={{
                headerTitle: 'Modifacation du profile',
              }}
            />
            <Stack.Screen
              name="transactions"
              options={{
                headerTitle: 'Listes des transactions',
              }}
            />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}
