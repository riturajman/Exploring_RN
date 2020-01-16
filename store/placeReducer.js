import { ADD_PLACE } from './placeAction';
import Place from '../models/places';

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id,
        action.placeData.title,
        action.placeData.image
      );
      return {
        places: [...state.places, newPlace]
      };
    default:
      return state;
  }
};
