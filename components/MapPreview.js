import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ImgPicker from './imagePicker';


const MapPreview = props => {
  const key = 'AIzaSyCWTieu63_Ah39eN_M40id9gvqEanJqj4g';
  let imagePreviewUrl;
  if (props.location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lan}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lan}&key=${key}`;
  }
  return (
    <TouchableOpacity onPress={props.handleMapPress} style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? <Image style={styles.mapImage} source={{uri: imagePreviewUrl}}/> : props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    height: '100%',
    width: '100%'
  }
});

export default MapPreview;
