export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';
import * as FileSystem from 'expo-file-system';

import { insertPlace, fetchPlace } from '../helpers/db';

export const addPlace = (title, img) => {
  return async dispatch => {
    //file sys code starts
    const fileName = img.split('').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: img,
        to: newPath
      });
      //file sys code ends
      const dbResult = await insertPlace(
        title,
        newPath,
        'Majhigram, Panrui',
        25.2,
        31.9
      );
      console.log('inisde dispatch', newPath);

      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: { id: dbResult.insertId, title: title, image: newPath }
      });
    } catch (err) {
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlace();
      console.log(dbResult);
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (err) {}
  };
};
