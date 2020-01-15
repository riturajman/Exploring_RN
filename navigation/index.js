import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/colors';

import PlacesListScreen from '../screens/PlacesListScreen';
import PlacesDetailScreen from '../screens/PlacesDetailScreen';
import NewScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';

const Navigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlacesDetailScreen,
    NewPlace: NewScreen,
    Map: MapScreen
  },
  {
    initialRouteName: 'Places',
    headerMode: 'screen'
  }
);

export default createAppContainer(Navigator);
