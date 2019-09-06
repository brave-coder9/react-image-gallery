import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as ACTION_TYPE from '../action'

export function* fetchPhoto(action) {
  try {
    const { payload: data } = action;
    const resp = yield axios.get('https://jsonplaceholder.typicode.com/photos');
    if (resp.status === 200) {
      yield put(fetchSuccess(resp.data));
    } else {
      yield put(fetchError(resp.status));
    }
  } catch (error) {
    yield put(fetchError(error));
  }
}

const fetchSuccess = payload => ({
  type: ACTION_TYPE.FETCH_PHOTO_SUCCESS,
  payload
});
const fetchError = payload => ({
  type: ACTION_TYPE.FETCH_PHOTO_ERROR,
  payload
});

export default function* watch() {
  yield takeLatest(ACTION_TYPE.FETCH_PHOTO, fetchPhoto);
}
