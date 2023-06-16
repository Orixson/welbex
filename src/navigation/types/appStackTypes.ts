import {APP_ROUTES} from '../StackNavigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {ItemData} from 'models/item';

export type AppStackParams = {
  [APP_ROUTES.VEHICLE]: {item: ItemData};
  [APP_ROUTES.VEHICLES_LIST]: {item: ItemData};
  [APP_ROUTES.SETTINGS]: undefined;
};

export type VehicleScreenRouteProp = RouteProp<
  AppStackParams,
  APP_ROUTES.VEHICLE
>;
export type VehicleListScreenNavigationProp = NativeStackScreenProps<
  AppStackParams,
  APP_ROUTES.VEHICLES_LIST
>;

export type RootStackParamList = AppStackParams;
