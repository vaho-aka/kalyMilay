import React, {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

export type CustomModalRef = {
  present: () => void;
  dismiss: () => void;
};

type CustomModalProps = {
  snapPoints?: string[];
  children?: React.ReactNode;
  onChange?: (index: number) => void;
};

const CustomModal = forwardRef<CustomModalRef, CustomModalProps>(
  (props, ref) => {
    const { snapPoints = ['80%'], children, onChange } = props;

    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // expose methods to parent through ref
    useImperativeHandle(ref, () => ({
      present: () => {
        bottomSheetModalRef.current?.present();
      },
      dismiss: () => {
        bottomSheetModalRef.current?.dismiss();
      },
    }));

    // callbacks
    const handleSheetChanges = useCallback(
      (index: number) => {
        onChange?.(index);
      },
      [onChange]
    );

    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        index={0}
      >
        <BottomSheetView style={styles.contentContainer}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CustomModal;
