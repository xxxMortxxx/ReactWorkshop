
import * as ALBUM_TYPES from '../types/albums';

export const requestAlbumsInit = () => ({
  type: ALBUM_TYPES.REQUEST_ALBUMS_INIT
});

export const requestAlbumsSuccess = (data) => ({
  type: ALBUM_TYPES.REQUEST_ALBUMS_SUCCESS,
  data
});

export const requestAlbumsError = (error) => ({
  type: ALBUM_TYPES.REQUEST_ALBUMS_ERROR,
  error,
});
