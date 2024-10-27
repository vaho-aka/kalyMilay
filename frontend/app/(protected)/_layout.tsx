import { Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function ProtectedLayout() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.replace('/(auth)/login');
    }
  }, [isSignedIn]);

  return (
    <Stack>
      <Stack.Screen
        name="settings"
        options={{ headerTitle: 'Modification du profile' }}
      />
      <Stack.Screen
        name="transactions"
        options={{ headerTitle: 'Listes des transactions' }}
      />
      <Stack.Screen
        name="checkout"
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
