import React, {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react';
import { StyleSheet, LayoutChangeEvent } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetBackgroundProps,
} from '@gorhom/bottom-sheet';

export type CustomModalRef = {
  present: () => void;
  dismiss: () => void;
};

type CustomModalProps = {
  children?: React.ReactNode;
  onChange?: (index: number) => void;
};

const CustomModal = forwardRef<CustomModalRef, CustomModalProps>(
  (props, ref) => {
    const { children, onChange } = props;

    const snapPoints = useMemo(() => ['80%'], []);

    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // expose methods to parent through ref
    useImperativeHandle(ref, () => ({
      present: () => {
        bottomSheetModalRef.current?.present();
      },
      dismiss: () => {
        bottomSheetModalRef.current?.forceClose();
      },
    }));

    // callbacks
    const handleSheetChanges = useCallback(
      (index: number) => {
        onChange?.(index);
      },
      [onChange]
    );

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.6}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        enableDynamicSizing={false}
      >
        <BottomSheetView style={styles.contentContainer}>
          <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
});

export default CustomModal;
