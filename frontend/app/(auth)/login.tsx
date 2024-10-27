import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import MainButton from '@/components/MainButton';
import { useAuth, useSignIn } from '@clerk/clerk-expo';
import Spinner from 'react-native-loading-spinner-overlay';

const PlaceholderImage = require('@/assets/images/logo.png');

const LoginPage = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogInPressHandler = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={loading} />
      <View style={styles.logoContainer}>
        <Image
          source={PlaceholderImage}
          contentFit="contain"
          style={styles.logo}
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputController}>
          <TextInput
            style={styles.input}
            placeholder="Adresse email"
            placeholderTextColor="#999"
            value={emailAddress}
            onChangeText={setEmailAddress}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="#999"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            autoCapitalize="none"
          />
        </View>

        <MainButton onPressHandler={onLogInPressHandler} text="Se connecter" />
        <Link href="/(auth)/register" style={styles.signUpButton}>
          Inscription
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  formContainer: {
    width: '100%',
    gap: 20,
  },
  inputController: {
    width: '100%',
    gap: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#4FAE5A',
    borderRadius: 10,
    padding: 13,
    textAlign: 'center',
    color: '#4FAE5A',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginPage;
