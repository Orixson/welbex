import React from 'react';
import {Alert, ViewStyle} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {mapStyle} from 'constants/mapStyle';
import {defineTruck} from 'utils/defineTruck';
import {ItemData} from 'models/item';

type MapType = {
  item: ItemData;
  style: ViewStyle;
};

export const MapItem = ({item, style}: MapType) => {
  const {
    location: {latitude, longitude},
    category,
  } = item;
  const Image = defineTruck(category);

  return (
    <MapView
      style={style}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 10,
        longitudeDelta: 10,
      }}
      customMapStyle={mapStyle}>
      <Marker
        draggable
        tracksViewChanges={false}
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
        onDragEnd={e => Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}
        title={'Test Marker'}
        description={'This is a description of the marker'}>
        <Image width={30} height={30} />
      </Marker>
    </MapView>
  );
};
