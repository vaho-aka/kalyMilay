import { useState, useEffect, useCallback } from 'react';
import * as SecureStore from 'expo-secure-store';
import { StorageHookResult } from '@/constants/interfaces';

const useSecureStore = <T>(
  key: string,
  initialValue: T
): StorageHookResult<T> => {
  const [secureValue, setSecureValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadSecureValue();
  }, [key, initialValue]);

  const loadSecureValue = async () => {
    try {
      setLoading(true);
      const item = await SecureStore.getItemAsync(key);
      const value = item ? JSON.parse(item) : initialValue;
      setSecureValue(value);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const setValue = useCallback(
    async (value: T | ((prev: T) => T)) => {
      try {
        setLoading(true);
        const valueToStore =
          value instanceof Function ? value(secureValue) : value;
        setSecureValue(valueToStore);
        await SecureStore.setItemAsync(key, JSON.stringify(valueToStore));
        setError(null);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    },
    [key, secureValue]
  );

  const removeValue = useCallback(async () => {
    try {
      setLoading(true);
      await SecureStore.deleteItemAsync(key);
      setSecureValue(initialValue);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  }, [key, initialValue]);

  return {
    value: secureValue,
    setValue,
    removeValue,
    loading,
    error,
  };
};

export default useSecureStore;
