export const ADD_PLACE = 'ADD_PLACE';
import * as FileSystem from 'expo-file-system';

export const addPlace = (title, img) => {
  return async dispatch => {
    const fileName = img.split('').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: img,
        to: newPath
      });
    } catch (err) {
      throw err;
    }

    dispatch({
      type: ADD_PLACE,
      placeData: { title: title, image: newPath }
    });
  };
};
