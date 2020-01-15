import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesListScreen from './screens/PlacesListScreen';
import PlacesDetailScreen from './screens/PlacesDetailScreen';
import NewScreen from './screens/NewPlaceScreen';
import MapScreen from './screens/MapScreen';

import placesReducer from './store/placeReducer';
const rootReducer = combineReducers({
  places: placesReducer
});

import NavigationScreen from './navigation/index';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  );
}
