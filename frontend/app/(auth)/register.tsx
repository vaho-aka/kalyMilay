import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, Stack, useRouter, useSegments } from 'expo-router';
import { Image } from 'expo-image';
import MainButton from '@/components/MainButton';
import { useAuth, useSignUp } from '@clerk/clerk-expo';
import Spinner from 'react-native-loading-spinner-overlay';

const PlaceholderImage = require('@/assets/images/logo.png');

const RegisterPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignUpPressHandler = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      // Create the user on Clerk
      await signUp.create({
        emailAddress,
        password,
      });

      // Send verification Email
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // change the UI to verify the email address
      setPendingVerification(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  // Verify the email address
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !pendingVerification }} />
      <Spinner visible={loading} />
      <View style={styles.logoContainer}>
        <Image
          source={PlaceholderImage}
          contentFit="contain"
          style={styles.logo}
        />
      </View>

      {!pendingVerification && (
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

          <MainButton
            onPressHandler={onSignUpPressHandler}
            text={`S'incrire`}
          />
          <View style={styles.loginContainer}>
            <Text>Déjà membre ?</Text>
            <Link href="/(auth)/login" style={styles.signUpButton}>
              Se connecter ici
            </Link>
          </View>
        </View>
      )}

      {pendingVerification && (
        <>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              style={styles.input}
              onChangeText={setCode}
            />
          </View>
          <MainButton onPressHandler={onPressVerify} text="Verify Email" />
        </>
      )}
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
    resizeMode: 'contain',
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
  button: {
    backgroundColor: '#4FAE5A',
    flexGrow: 0,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  loginContainer: {
    flexDirection: 'row',
    gap: 3,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButton: {
    color: '#4FAE5A',
  },
});

export default RegisterPage;
