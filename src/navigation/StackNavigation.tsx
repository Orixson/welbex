import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VehiclesList from 'screens/VehiclesList';
import Vehicle from 'screens/Vehicle';
import Settings from 'screens/Settings';
import {Button} from 'react-native';
import {useTranslation} from 'react-i18next';
import {AppStackParams} from 'types/appStackTypes';
import theme from 'global/config/theme';

export enum APP_ROUTES {
  VEHICLE = 'Vehicle',
  VEHICLES_LIST = 'VehiclesList',
  SETTINGS = 'Settings',
}

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack = ({}) => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={APP_ROUTES.VEHICLES_LIST}
          component={VehiclesList}
          options={({navigation}) => ({
            title: t('vehicles'),
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate(APP_ROUTES.SETTINGS)}
                title={t('settings')}
                color={theme.colors.greyWithOpacity8}
              />
            ),
          })}
        />
        <Stack.Screen
          name={APP_ROUTES.VEHICLE}
          component={Vehicle}
          options={() => ({
            title: t('vehicle'),
          })}
        />
        <Stack.Screen
          name={APP_ROUTES.SETTINGS}
          component={Settings}
          options={() => ({
            title: t('settings'),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
