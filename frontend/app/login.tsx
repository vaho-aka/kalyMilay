import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { Image } from 'expo-image';
import MainButton from '@/components/MainButton';

const PlaceholderImage = require('@/assets/images/logo.png');

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    // if (email.trim() === '' || password.trim() === '') {
    //   console.log('Erreur : ', 'Veuillez remplir tous les champs');
    //   return;
    // }

    console.log('Email:', email);
    console.log('Password:', password);

    router.replace('/');

    setEmail('');
    setPassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={PlaceholderImage}
          contentFit="contain"
          style={styles.logo}
        />
      </View>

      <SafeAreaView style={styles.formContainer}>
        <View style={styles.inputController}>
          <TextInput
            style={styles.input}
            placeholder="Adresse email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
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

        <MainButton onPressHandler={loginHandler} text="Se connecter" />
        <Link href="/register" style={styles.signUpButton}>
          Inscription
        </Link>
      </SafeAreaView>
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
