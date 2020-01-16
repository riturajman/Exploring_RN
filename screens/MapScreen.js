import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default MapScreen = props => {
  const mapRegion = {
    latitude: 23.92,
    longitude: 87.5,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  return <MapView style={styles.map} region={mapRegion} />;
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
