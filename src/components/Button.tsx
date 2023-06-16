import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Text} from './Text';
import theme from 'global/config/theme';

type ButtonType = {
  style?: ViewStyle;
  onPress: () => void;
  children?: React.ReactNode;
};

export const Button = ({children, style, onPress}: ButtonType) => {
  return (
    <TouchableOpacity onPress={onPress} style={style ?? styles.container}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.yellowPrimary,
  },
});
