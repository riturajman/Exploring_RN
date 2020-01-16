import React, { useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  FlatList
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButtons';

import { useSelector, useDispatch } from 'react-redux';

import PlaceItem from './placeItem';

import * as placeAction from '../store/placeAction';

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placeAction.loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.image}
          title={itemData.item.title}
          address={null}
          onSelect={() =>
            props.navigation.navigate('PlacesDetailScreen', {
              // placeTitle: itemData.item.title,
              // placeId: itemData.item.id
            })
          }
        />
      )}
    />
  );
};

PlacesListScreen.navigationOptions = navData => {
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

export default PlacesListScreen;
