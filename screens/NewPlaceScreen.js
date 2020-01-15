import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput
} from 'react-native';

import Colors from '../constants/colors';

export default NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('')

    handleValueChange = (text)=>{
        setTitleValue(text)
    }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.textInput} onChangeText={handleValueChange} value={titleValue} keyboardType="default"/>
        <Button title="Save Place" color="black" onPress={()=>{}}/>
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
    label : {
        fontSize: 20,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 250
    }

})
