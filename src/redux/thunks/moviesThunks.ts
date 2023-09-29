import { createAsyncThunk } from '@reduxjs/toolkit'
import { movies$ } from '../../../movies';

export const fetchMovies = createAsyncThunk(
  'moviesReducer/fetchMovies',
  async (_, thunkAPI) => {
    const response = await movies$;
    return response;
  }
)
