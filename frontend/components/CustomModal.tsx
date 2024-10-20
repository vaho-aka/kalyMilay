import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import React, { PropsWithChildren } from 'react';
import RemixIcon from 'rn-remixicon';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function CustomModal({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <TouchableOpacity onPress={onClose}>
            <RemixIcon name="close-line" size={22} />
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '85%',
    width: '100%',
    backgroundColor: '#f1f1f1',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: 50,
    backgroundColor: '#fff',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
