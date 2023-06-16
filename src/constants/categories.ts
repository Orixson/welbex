type CategoriesType = {
  id: number;
  type: string;
  checked: boolean;
};

export enum Categories {
  SPECIAL_TRANSPORT = 'Special transport',
  PASSENGER = 'Passenger',
  TRUCK = 'Truck',
}

export const categories: CategoriesType[] = [
  {id: 1, type: Categories.SPECIAL_TRANSPORT, checked: false},
  {id: 2, type: Categories.PASSENGER, checked: false},
  {id: 3, type: Categories.TRUCK, checked: false},
];
