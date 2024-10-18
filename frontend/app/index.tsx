import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { Image } from 'expo-image';

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

    router.navigate('/(tabs)/');

    setEmail('');
    setPassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={PlaceholderImage} style={styles.logo} />
      </View>

      <SafeAreaView style={styles.formContainer}>
        {/* <View style={styles.socialContainer}>
          <Pressable style={styles.socialButton}>
            <View style={styles.socialButtonContainer}>
              <Text>Continue avec</Text>
              <Text style={styles.socialButtonText}>Email</Text>
            </View>
          </Pressable>

          <Pressable style={[styles.socialButton]}>
            <View style={styles.socialButtonContainer}>
              <Text>Continue avec</Text>
              <Text style={styles.socialButtonText}>Facebook</Text>
            </View>
          </Pressable>

          <Pressable style={[styles.socialButton]}>
            <View style={styles.socialButtonContainer}>
              <Text>Continue avec</Text>
              <Text style={styles.socialButtonText}>Google</Text>
            </View>
          </Pressable>
        </View> */}

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

        <Pressable style={styles.button} onPress={loginHandler}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </Pressable>
        <Link href="/register" style={[styles.button, styles.signUpButton]}>
          <Text style={[styles.buttonText, styles.signUpButtonText]}>
            Inscription
          </Text>
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
    resizeMode: 'contain',
  },

  formContainer: {
    width: '100%',
    gap: 20,
  },
  socialContainer: {
    gap: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButtonText: {},
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
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#4FAE5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButtonText: {
    color: '#4FAE5A',
  },
});

export default LoginPage;
