import SpecialTransport from 'assets/images/police.svg';
import Truck from 'assets/images/truck.svg';
import Passenger from 'assets/images/passenger.svg';

export const defineTruck = (category: string) => {
  if (category === 'Special transport') {
    return SpecialTransport;
  }
  if (category === 'Passenger') {
    return Passenger;
  }
  if (category === 'Truck') {
    return Truck;
  } else {
    return Truck;
  }
};
