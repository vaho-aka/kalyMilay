import { Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function AuthLayout() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace('/(tabs)');
    }
  }, [isSignedIn]);

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}