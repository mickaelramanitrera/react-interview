import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from '@/types';

type MoviesState = {
  isLoading: boolean;
  movies: Record<string, Movie[]>;
  value: number;
};

const initialState = {
  value: 0,
  isLoading: false,
  movies: {
    Next: [
      {
        title: 'Avengers : Endgame',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        likes: 100,
        dislikes: 49,
        category: 'Next',
        hasVoted: 'NONE'
      },
      {
        title: 'Avengers : Endgame',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        likes: 100,
        dislikes: 49,
        category: 'Next',
        hasVoted: 'NONE'
      },
      {
        title: 'Avengers : Endgame',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        likes: 100,
        dislikes: 49,
        category: 'Next',
        hasVoted: 'NONE'
      },
      {
        title: 'Avengers : Endgame',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        likes: 100,
        dislikes: 49,
        category: 'Next',
        hasVoted: 'NONE'
      },
      {
        title: 'Avengers : Endgame',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        likes: 100,
        dislikes: 49,
        category: 'Next',
        hasVoted: 'NONE'
      },
      {
        title: 'Avengers : Endgame',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        likes: 100,
        dislikes: 49,
        category: 'Next',
        hasVoted: 'NONE'
      },
      {
        title: 'Avengers : Endgame',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        likes: 100,
        dislikes: 49,
        category: 'Next',
        hasVoted: 'NONE'
      },
      {
        title: 'Avengers : Endgame',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        likes: 100,
        dislikes: 49,
        category: 'Next',
        hasVoted: 'NONE'
      },
    ]
  }
} as MoviesState;

export const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = movies.actions;
export default movies.reducer;
