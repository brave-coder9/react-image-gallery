import { photoReducer } from "../../../src/reducer/photoReducer";
import * as ACTION_TYPE from "../../../src/action";


describe('photoReducer', () => {

  it('If FETCH_PHOTO_SUCCESS action was dispatched, next state must include the photos array.', () => {
    const action = {
      type: ACTION_TYPE.FETCH_PHOTO_SUCCESS,
      payload: [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "officia porro iure quia iusto qui ipsa ut modi",
          "url": "https://via.placeholder.com/600/24f355",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
      ]
    }
    const state = photoReducer(undefined, action);
    expect(state.photos.length).toBe(3);
    expect(state.error).toBeUndefined();
  })

  it('If FETCH_PHOTO_ERROR action was dispatched, in next state, photos should be empty array.', () => {
    const action = {
      type: ACTION_TYPE.FETCH_PHOTO_ERROR,
      payload: { status: 500, statusMessage: 'Internal Error' }
    }
    const state = photoReducer(undefined, action);
    expect(state.photos.length).toBe(0);
    expect(state.error).toBeDefined();
  })

})