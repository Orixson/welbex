import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import 'assets/i18n/i18n';
import {SafeAreaView} from 'components/SafeAreaView';
import theme from 'global/config/theme';

let language = 'en';

const Settings = () => {
  const {i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState(language);

  const changeLanguage = (value: string) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        language = value;
        setLanguage(value);
      })
      .catch(err => Alert.alert(err));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable
          onPress={() => changeLanguage('en')}
          style={dynamicStyles(currentLanguage === 'en').button}>
          <Text>Select English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage('ru')}
          style={dynamicStyles(currentLanguage === 'ru').button}>
          <Text>Выбрать русский</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.pureWhite,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

const dynamicStyles = StyleSheet.create((seleted: boolean) => ({
  button: {
    backgroundColor: seleted
      ? theme.colors.greenPrimary
      : theme.colors.greyWithOpacity8,
    padding: '5%',
  },
}));
