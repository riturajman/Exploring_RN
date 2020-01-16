import React, { useState } from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import MapPreviewScreen from './MapPreview';

const LocationPicker = props => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permission',
        [{ text: 'Okay' }]
      );
      return false;
    } else {
      return true;
    }
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000
      });
      console.log(location);
      setPickedLocation({
        lat: location.coords.latitude,
        lan: location.coords.longitude
      });
    } catch (error) {
      Alert.alert('Could not fetch location', 'Try again', [{ text: 'Okay' }]);
    }
    setIsFetching(false);
  };

  return (
    <View style={styles.locaionPicker}>
      <MapPreviewScreen style={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size="large" color="green" />
        ) : (
          <Text>No Location Selected!</Text>
        )}
      </MapPreviewScreen>
      <Button
        title="Press for location"
        color="black"
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locaionPicker: {
    marginBottom: 17
  },
  mapPreview: {
    width: '100%',
    height: 200,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LocationPicker;
