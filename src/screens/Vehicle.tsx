import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {MapItem} from 'components/MapItem';
import {Text} from 'components/Text';
import {openDialScreen, writeInWhatsapp} from 'utils/contact';
import {SafeAreaView} from 'components/SafeAreaView';
import {Button} from 'components/Button';
import {useRoute} from '@react-navigation/native';
import {VehicleScreenRouteProp} from 'navigation/types/appStackTypes';
import theme from 'global/config/theme';

const Vehicle = () => {
  const {t} = useTranslation();
  const {params} = useRoute<VehicleScreenRouteProp>();
  const {item} = params;
  const {category, driver, phone} = item;

  return (
    <SafeAreaView>
      <MapItem item={item} style={styles.mapStyle} />
      <View style={styles.container}>
        <Text style={styles.text} text={`${t('category')}: ${t(category)}`} />
        <Text style={styles.text} text={`${t('driver')}: ${driver}`} />
        <Text style={styles.text} text={`${t('phone')}: ${phone}`} />
        <View style={styles.buttonContainer}>
          <Button onPress={() => openDialScreen(phone)} style={styles.button}>
            <Text style={styles.buttonText} text={t('call')} />
          </Button>
          <Button onPress={() => writeInWhatsapp(phone)} style={styles.button}>
            <Text style={styles.buttonText} text={t('write')} />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Vehicle;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  mapStyle: {
    width: '90%',
    height: '25%',
    marginVertical: '5%',
    alignSelf: 'center',
  },
  button: {
    padding: '5%',
    marginBottom: '2%',
    color: theme.colors.pureWhite,
    fontSize: theme.fontSizes.s,
    backgroundColor: theme.colors.greenPrimary,
    borderRadius: 10,
  },
  buttonText: {
    color: theme.colors.pureWhite,
    fontSize: theme.fontSizes.s,
  },
  text: {
    padding: '5%',
    marginBottom: '2%',
    color: theme.colors.pureWhite,
    fontSize: theme.fontSizes.s,
    backgroundColor: theme.colors.blue,
  },
});
