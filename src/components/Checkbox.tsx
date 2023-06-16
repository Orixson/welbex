import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Text} from './Text';
import theme from 'global/config/theme';

type CheckBoxType = {
  index: number;
  category: string;
  onPress: (index: number, newValue: boolean) => void;
  checked: boolean;
  t: (val: string) => ReactNode;
};

export const CheckBoxItem = ({
  index,
  category,
  onPress,
  checked,
  t,
}: CheckBoxType) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        disabled={false}
        value={checked}
        onValueChange={newValue => {
          onPress(index, newValue);
        }}
        style={styles.checkbox}
        tintColors={{
          true: theme.colors.yellowPrimary,
          false: theme.colors.grey,
        }}
      />
      <Text style={styles.checkboxText} text={`${t(category)}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.pureWhite,
  },
  checkbox: {
    marginVertical: '5%',
  },
  checkboxText: {
    color: theme.colors.black,
    marginLeft: '2%',
  },
});
