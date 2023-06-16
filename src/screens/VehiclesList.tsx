import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import data from '../../base.json';
import {categories} from 'constants/categories';
import {useTranslation} from 'react-i18next';
import {MapItem} from 'components/MapItem';
import {CheckBoxItem} from 'components/Checkbox';
import {SafeAreaView} from 'components/SafeAreaView';
import {Button} from 'components/Button';
import {Text} from 'components/Text';

import {ItemData} from 'models/item';
import theme from 'global/config/theme';
import {SCREEN_HEIGHT} from 'global/styles/constants';

const DATA: ItemData[] = data;

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  isList: boolean;
  style: ViewStyle;
  t: (val: string) => React.ReactNode;
};

const Item = ({item, onPress, isList, style, t}: ItemProps) => (
  <Button onPress={onPress} style={style}>
    {isList ? (
      <>
        <Text style={styles.name} text={item.driver} />
        <Text style={styles.name} text={`${item.vehicle}#${item.id}`} />
        <Text style={styles.name} text={`${t(item.category)}`} />
      </>
    ) : (
      <MapItem item={item} style={styles.mapStyle} />
    )}
  </Button>
);

const VehiclesList = () => {
  const {navigate} = useNavigation<any>();
  const [data, setData] = useState(DATA);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isList, setView] = useState<boolean>(true);
  const {t} = useTranslation();

  const renderListItem = ({item}: {item: ItemData}) => {
    return (
      <Item
        item={item}
        isList={isList}
        onPress={() => navigate('Vehicle', {item})}
        style={isList ? styles.item : styles.mapContainer}
        t={t}
      />
    );
  };

  // this function is used to select the vehicle categories
  const check = (index: number, newValue: boolean) => {
    categories[index].checked = newValue;
    const checkedTypes = categories
      .filter(item => item.checked)
      .map(checkedItem => checkedItem.type);

    setSelectedCategories(checkedTypes);
  };

  // this function applies the filtering of checked types of the vehicles
  const apply = () => {
    if (!!selectedCategories.length) {
      const filteredData = DATA.filter(item => {
        if (selectedCategories.includes(item.category)) {
          return item;
        }
      });
      setData(filteredData);
    } else {
      setData(DATA);
    }
  };
  // this function is used to set the view of the vehicles from list to maps
  const changeView = () => {
    setView(!isList);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderListItem}
        ListHeaderComponent={
          <>
            <View style={styles.checkboxContainer}>
              <Text style={styles.categories} text={t('categories')} />
              {categories.map((category, index) => (
                <CheckBoxItem
                  key={category.id}
                  category={category.type}
                  checked={category.checked}
                  onPress={check}
                  index={index}
                  t={t}
                />
              ))}
              <Button style={styles.applyButtonContainer} onPress={apply}>
                <Text style={styles.applyButtonTxt} text={t('apply')} />
              </Button>
            </View>
            <Button onPress={changeView} style={styles.listHeaderComponent}>
              <Text
                style={styles.listHeaderComponentTxt}
                text={isList ? t('maps') : t('list')}
              />
            </Button>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default VehiclesList;

const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: theme.colors.pureWhite,
    height: SCREEN_HEIGHT / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: '3%',
    marginVertical: '3%',
    marginHorizontal: '3%',
    backgroundColor: theme.colors.greenSecondary,
  },
  checkboxContainer: {
    borderWidth: 10,
    borderColor: theme.colors.blue,
    marginBottom: '5%',
  },
  name: {
    fontSize: 25,
    color: theme.colors.pureWhite,
  },
  applyButtonContainer: {
    backgroundColor: theme.colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    padding: '3%',
  },
  applyButtonTxt: {
    color: theme.colors.pureWhite,
    fontSize: 20,
  },
  categories: {
    color: theme.colors.pureBlack,
    fontSize: 25,
    backgroundColor: theme.colors.greenSecondary,
  },
  mapStyle: {
    width: '90%',
    height: '90%',
  },
  listHeaderComponent: {
    backgroundColor: theme.colors.yellowPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    borderRadius: 10,
    padding: '2%',
  },
  listHeaderComponentTxt: {
    fontSize: 20,
    color: theme.colors.pureWhite,
  },
});
