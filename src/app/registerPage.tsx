import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    if (email.trim() === '' || password.trim() === '') {
      console.log('Erreur : ', 'Veuillez remplir tous les champs');
      return;
    }

    console.log('Name:', userName);
    console.log('Email:', email);
    console.log('Password:', password);

    router.replace('/home');

    setEmail('');
    setPassword('');
    setUserName('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/Logo.png')}
          style={styles.logo}
        />
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

        <Pressable style={styles.button} onPress={loginHandler}>
          <Text style={styles.buttonText}>S'incrire</Text>
        </Pressable>
        <Link
          href="/"
          style={[styles.button, styles.signUpButton]}
          onPress={loginHandler}
        >
          <Text style={[styles.buttonText, styles.signUpButtonText]}>
            Se connecter
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
    backgroundColor: '#4CAF50',
    width: '100%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButtonText: {
    color: '#4CAF50',
  },
});

export default RegisterPage;
