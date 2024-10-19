import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { Image } from 'expo-image';
import MainButton from '@/components/MainButton';

const PlaceholderImage = require('@/assets/images/logo.png');

const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerHandler = () => {
    // if (email.trim() === '' || password.trim() === '') {
    //   console.log('Erreur : ', 'Veuillez remplir tous les champs');
    //   return;
    // }

    console.log('Name:', userName);
    console.log('Email:', email);
    console.log('Password:', password);

    router.replace('/');

    setEmail('');
    setPassword('');
    setUserName('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={PlaceholderImage} style={styles.logo} />
      </View>

      <SafeAreaView style={styles.formContainer}>
        <View style={styles.inputController}>
          <TextInput
            style={styles.input}
            placeholder="Nom d'utilisateur"
            placeholderTextColor="#999"
            value={userName}
            onChangeText={setUserName}
          />
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

        <MainButton onPressHandler={registerHandler} text={`S'incrire`} />
        <View style={styles.loginContainer}>
          <Text>Déjà membre ?</Text>
          <Link href="/" style={styles.signUpButton}>
            Se connecter ici
          </Link>
        </View>
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
    width: '100%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    display: 'flex',
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
