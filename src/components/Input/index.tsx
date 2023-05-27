import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {colors} from '../../constants/colors';
import Icon from '../Icon';

export default function Input({
  label,
  error,
  password,
  value,
  email,
  onFocus = () => {},
  onChangeText = () => {},
  placeholder,
  style,
  ...props
}: {
  label?: string;
  value?: string;
  error?: any;
  password?: any;
  email?: any;
  onFocus?: any;
  onChangeText?: any;
  placeholder?: string;
  style?: any;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  const onEyePress = () => {
    setHidePassword(!hidePassword);
  };

  const InputIcons = () => {
    let image = <Icon />;
    switch (label?.toLowerCase()) {
      case 'email':
        image = (
          <Icon
            name="ios-mail-open-outline : Ionicons"
            size={23}
            color={colors.white}
          />
        );
        break;
      case 'password':
        image = (
          <Icon
            name="ios-lock-closed-outline : Ionicons"
            size={23}
            color={colors.white}
          />
        );
        break;
      default:
        image = (
          <Icon
            name="ios-mail-open-outline : Ionicons"
            size={23}
            color={colors.white}
          />
        );
    }
    return image;
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          isFocused
            ? styles.pressedInputContainer
            : styles.defaultInputContainer,
          error ? styles.errorWarning : styles.defaultInputContainer,
        ]}>
        <View style={styles.inputIcon}>
          <InputIcons />
        </View>
        <TextInput
          style={styles.inputText}
          value={value}
          placeholderTextColor={colors.aqua}
          onChangeText={onChangeText}
          autoCorrect={false}
          secureTextEntry={password && hidePassword}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
        {password ? (
          <TouchableOpacity style={styles.icon} onPress={onEyePress}>
            {hidePassword ? (
              <Icon name="eye : Ionicons" size={25} color={colors.white} />
            ) : (
              <Icon name="eye-off : Ionicons" size={25} color={colors.white} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
