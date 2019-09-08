import * as ACTION_TYPE from '../action';

const initialState = {
  photos: [],
  error: undefined,
  favouriteCount: 0,
}

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_PHOTO_SUCCESS: {
      return { ...state, photos: action.payload, error: undefined };
    }
    case ACTION_TYPE.FETCH_PHOTO_ERROR: {
      return { ...state, photos: [], error: action.payload };
    }
    case ACTION_TYPE.SET_FAVOURITE: {
      const { index, isFavourite } = action.payload;
      state.photos[index].isFavourite = isFavourite;
      if (isFavourite) state.favouriteCount++;
      else state.favouriteCount--;
      return { ...state };
    }
    default:
      return state;
  }
};
