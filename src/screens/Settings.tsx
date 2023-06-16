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
          style={
            currentLanguage === 'en'
              ? styles.buttonActive
              : styles.buttonInactive
          }>
          <Text>Select English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage('ru')}
          style={
            currentLanguage === 'ru'
              ? styles.buttonActive
              : styles.buttonInactive
          }>
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
  buttonActive: {
    backgroundColor: theme.colors.greenPrimary,
    padding: 20,
  },
  buttonInactive: {
    backgroundColor: theme.colors.greyWithOpacity8,
    padding: 20,
  },
});
