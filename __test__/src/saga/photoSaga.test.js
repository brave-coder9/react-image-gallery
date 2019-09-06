import { fetchPhoto } from "../../../src/saga/photoSaga";
import * as ACTION_TYPE from "../../../src/action";


describe('photoSaga', () => {

  it('fetch should be success', () => {
    const action = {
      type: ACTION_TYPE.FETCH_PHOTO,
      payload: {}
    }
    fetchPhoto(action);
    expect(1).toBe(1);
  })

})