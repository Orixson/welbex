import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  SafeAreaView as RNSafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import theme from 'global/config/theme';

export const SafeAreaView = ({
  children,
  style = styles.parent,
  ...props
}: SafeAreaViewProps) => {
  return (
    <RNSafeAreaView edges={['top']} style={style} {...props}>
      <View style={styles.container}>{children}</View>
    </RNSafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: theme.colors.pureWhite,
    flex: 1,
  },
  container: {
    overflow: 'hidden',
    backgroundColor: theme.colors.pureWhite,
    flex: 1,
  },
});
