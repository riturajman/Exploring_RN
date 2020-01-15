import React from 'react';

import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButtons';

const PlacesListScreen = props => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
      <Button
        title="Go to Map"
        onPress={() => props.navigation.navigate('NewPlace')}
      />
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'All Places',
    headerRight: () => (
      <HeaderButtons headerButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={'ios-add'}
          onPress={() => navData.navigation.navigate('NewPlace')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen
