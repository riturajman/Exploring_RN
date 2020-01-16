import React, { useState } from 'react';

import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImgPicker = props => {
  const [pickedImage, setPickedImage] = useState('');

  const verifyPermissions = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== 'granted') {
      Alert.alert('Permission error', 'You need to grant camera permission', {
        text: 'Ok'
      });
      return false;
    } else {
      return true;
    }
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(image.uri);
    props.imageTakenHandler(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>You did not select any picture yet</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button title="Take picture" color="black" onPress={takeImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center'
  },
  imagePreview: {
    width: '100%',
    height: 250,
    marginBottom: 15,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImgPicker;
