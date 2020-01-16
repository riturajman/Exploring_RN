import { ADD_PLACE } from './placeAction';
import Place from '../models/places';
import { SET_PLACES } from './placeAction';

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
    case SET_PLACES:
      return {
        places: action.places.map(obj => {
          return new Place(
            obj.id.toString(),
            obj.title,
            obj.imageURI
          );
        })
      };

    default:
      return state;
  }
};
