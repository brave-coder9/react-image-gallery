import { all, fork } from 'redux-saga/effects';
import photoSaga from './photoSaga';

export default function* rootSaga() {
  yield all([
    fork(photoSaga),
  ]);
}
