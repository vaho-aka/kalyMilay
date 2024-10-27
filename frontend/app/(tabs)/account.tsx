import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomImage from '@/components/CustomImage';
import RemixIcon from 'rn-remixicon';
import { Link, router } from 'expo-router';
import { getImageUrl } from '@/constants/api';
import { useAuth } from '@clerk/clerk-expo';
import Spinner from 'react-native-loading-spinner-overlay'; // If you want to show loading state

export default function Account() {
  const { signOut, isLoaded, isSignedIn } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      // After successful sign out, redirect to public home or login
      router.replace('/(tabs)');
    } catch (err) {
      console.error('Error signing out:', err);
      alert('Une erreur est survenue lors de la déconnexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, !isSignedIn && styles.notSignIn]}>
      {isSignedIn ? (
        <>
          <Spinner visible={loading} />
          <TouchableOpacity style={styles.userContainer}>
            <CustomImage
              source={{ uri: getImageUrl('/api/v1/uploads/users/avatar.jpg') }}
              wrapper={styles.imageContainer}
              image={styles.image}
            />
            <Text style={styles.text}>Vahoaka</Text>
          </TouchableOpacity>

          <View style={styles.optionsContainer}>
            <Link href={'/(protected)/settings'} asChild>
              <TouchableOpacity style={styles.optionContainer}>
                <View style={styles.option}>
                  <RemixIcon size={32} name="user-settings-line" />
                  <Text>Modification du profile</Text>
                </View>
                <RemixIcon name="arrow-right-s-line" size={32} />
              </TouchableOpacity>
            </Link>
            <Link href={'/(protected)/transactions'} asChild>
              <TouchableOpacity style={styles.optionContainer}>
                <View style={styles.option}>
                  <RemixIcon size={32} name="file-list-line" />
                  <Text>Listes des transactions</Text>
                </View>
                <RemixIcon name="arrow-right-s-line" size={32} />
              </TouchableOpacity>
            </Link>
            <Pressable style={styles.btn} onPress={handleSignOut}>
              <RemixIcon size={32} name="logout-box-r-line" color="#FF4040" />
              <Text style={styles.btnText}>Déconnexion</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <Link href={'/(auth)/login'} asChild>
          <TouchableOpacity style={styles.loginBtnContainer}>
            <Text>Se connecter</Text>
          </TouchableOpacity>
        </Link>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    flex: 1,
    gap: 10,
  },
  notSignIn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    gap: 10,
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imageWrapper: {
    position: 'relative',
    height: 70,
    width: 70,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  webImage: {
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    zIndex: 1,
  },
  text: {},
  optionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
  },
  optionContainer: {
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#FF4040',
  },
  loginBtnContainer: {
    backgroundColor: '#fff',
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
  },
});
