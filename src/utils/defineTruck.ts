import SpecialTransport from 'assets/images/police.svg';
import Truck from 'assets/images/truck.svg';
import Passenger from 'assets/images/passenger.svg';
import {Categories} from 'constants/categories';

// This function is used to return the SVG image of the vehicle type.
export const defineTruck = (category: string) => {
  if (category === Categories.SPECIAL_TRANSPORT) {
    return SpecialTransport;
  }
  if (category === Categories.PASSENGER) {
    return Passenger;
  }
  if (category === Categories.TRUCK) {
    return Truck;
  } else {
    return Truck;
  }
};
