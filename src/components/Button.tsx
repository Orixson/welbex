import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import theme from 'global/config/theme';

type ButtonType = {
  style?: ViewStyle;
  onPress: () => void;
  children?: React.ReactNode;
  onLongPress?: () => void;
};

export const Button = ({children, style, onPress, onLongPress}: ButtonType) => {
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      style={style ?? styles.container}>
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
