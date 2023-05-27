import {Pressable} from 'react-native';
import React from 'react';
import styles from './style';

export default function CheckBox({
  check,
  onPressCheck = () => {},
}: {
  check: boolean;
  onPressCheck: (check: boolean) => void;
}) {
  const _onPress = () => {
    onPressCheck(!check);
  };

  return (
    <Pressable
      onPress={_onPress}
      style={[styles.container, check && styles.checked]}
    />
  );
}
