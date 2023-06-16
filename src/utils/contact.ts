import {t} from 'i18next';
import {Platform, Linking} from 'react-native';

export const openDialScreen = (phone: string) => {
  if (Platform.OS === 'ios') {
    Linking.openURL(`telprompt:${phone}`);
  } else {
    Linking.openURL(`tel:${phone}`);
  }
};

export const writeInWhatsapp = (phone: string) => {
  Linking.openURL(`whatsapp://send?phone=${phone}&text=${t('greeting')}`);
};
