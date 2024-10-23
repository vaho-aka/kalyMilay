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
import { Link } from 'expo-router';

const Avatar = require('@/assets/images/Avatar.jpg');

export default function account() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.userContainer}>
        <CustomImage
          source={Avatar}
          wrapper={styles.imageContainer}
          image={styles.image}
        />
        <Text style={styles.text}>Vahoaka</Text>
      </TouchableOpacity>

      <View style={styles.optionsContainer}>
        <Link href={'/settings'} asChild>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.option}>
              <RemixIcon size={32} name="user-settings-line" />
              <Text>Modification du profile</Text>
            </View>
            <RemixIcon name="arrow-right-s-line" size={32} />
          </TouchableOpacity>
        </Link>
        <Link href={'/transactions'} asChild>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.option}>
              <RemixIcon size={32} name="file-list-line" />
              <Text>Listes des transactions</Text>
            </View>
            <RemixIcon name="arrow-right-s-line" size={32} />
          </TouchableOpacity>
        </Link>
        <Link href={'/login'} asChild>
          <Pressable style={styles.btn}>
            <RemixIcon size={32} name="logout-box-r-line" color="#FF4040" />
            <Text style={styles.btnText}>Déconnexion</Text>
          </Pressable>
        </Link>
      </View>
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
});
