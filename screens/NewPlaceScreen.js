import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput
} from 'react-native';

//import redux hook
import { useDispatch } from 'react-redux';
//import actions
import * as placeActions from '../store/placeAction';

import ImagePicker from '../components/imagePicker';
import LocationPicker from '../components/LocationPicker';

export default NewPlaceScreen = props => {
  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const [navigation, setNavigation] = useState();

  const setNav = location => {
    setNavigation(location);
  };

  const imageTakenHandler = imgPath => {
    setSelectedImage(imgPath);
  };

  const handleValueChange = text => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placeActions.addPlace(titleValue, selectedImage));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleValueChange}
          value={titleValue}
          keyboardType="default"
        />
        <ImagePicker imageTakenHandler={imageTakenHandler} />
        <LocationPicker navigation={props.navigation} />
        <Button title="Save Place" color="black" onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add place'
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 20,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 250
  }
});
