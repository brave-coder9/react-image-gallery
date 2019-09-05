import * as ACTION_TYPE from '../action';

const initialState = {
  photos: [],
  error: undefined,
}

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_PHOTO_SUCCESS: {
      return { ...state, photos: action.payload, error: undefined };
    }
    case ACTION_TYPE.FETCH_PHOTO_ERROR: {
      return { ...state, photos: [], error: action.payload };
    }
    default:
      return state;
  }
};
