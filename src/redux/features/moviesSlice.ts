import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Movie, DBMovie } from '@/types';
import { RootState } from "../store";
import { fetchMovies } from "../thunks/moviesThunks";

type MoviesState = {
  isLoading: boolean;
  movies: Record<string, Movie[]>;
  selectedCategories: string[];
};

const initialState = {
  isLoading: false,
  selectedCategories: ['Tous'],
  movies: {}
} as MoviesState;

export const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    reset: () => initialState,
    addSelectedCategory: (state, action: PayloadAction<string>) => {
      const categoryToAdd = action.payload;
      const categoryToAddIndex = state.selectedCategories.findIndex((category) => category.toLowerCase() === categoryToAdd.toLowerCase());

      // if category is tous we can put it and remove all others
      if (categoryToAdd === 'Tous') {
        state.selectedCategories = ['Tous'];
        return;
      }

      let categoriesToPersist = [...state.selectedCategories];
      if (categoryToAddIndex < 0) {
        categoriesToPersist.push(action.payload);
      }

      // remove tous if we select a category
      if (categoriesToPersist.includes('Tous')) {
        categoriesToPersist = categoriesToPersist.filter((cat) => cat !== 'Tous');
      }

      state.selectedCategories = categoriesToPersist;
    },
    removeSelectedCategory: (state, action: PayloadAction<string>) => {
      const newSelectedCategories = state.selectedCategories.filter((category) => {
        const isToRemove = category.toLowerCase() === action.payload.toLowerCase();
        return !isToRemove;
      });

      if (!newSelectedCategories?.length) {
        state.selectedCategories = ['Tous'];
        return;
      }

      state.selectedCategories = newSelectedCategories;
    },
    deleteMovie: (state, action: PayloadAction<string>) => {
      const categories = Object.keys(state.movies);
      const cleanedMovies: RootState['moviesReducer']['movies'] = { ...state.movies };
      const idToRemove = action.payload;

      categories.forEach((category) => {
        cleanedMovies[category] = cleanedMovies[category].filter((movie) => {
          return movie.id !== idToRemove;
        });
      })

      state.movies = cleanedMovies;
    },
    upvoteMovie: (state, action: PayloadAction<string>) => {
      const movieId = action.payload;
      const newMoviesState = { ...state.movies };
      Object.entries(state.movies).forEach(([category, movies]) => {
        newMoviesState[category] = movies.map((movie) => {
          const isMovieToUpdate = movie.id === movieId;
          let likesCount = movie.likes;
          let dislikesCount = movie.dislikes;

          if (isMovieToUpdate) {
            likesCount = movie.likes + 1;
            if (movie.hasVoted === 'DOWN') {
              dislikesCount = movie.dislikes - 1;
            }
          }

          const newMovie = {
            ...movie,
            hasVoted: isMovieToUpdate ? 'UP' as const : movie.hasVoted,
            likes: likesCount,
            dislikes: dislikesCount
          };

          return newMovie;
        })
      })

      state.movies = newMoviesState;
    },
    downvoteMovie: (state, action: PayloadAction<string>) => {
      const movieId = action.payload;
      const newMoviesState = { ...state.movies };
      Object.entries(state.movies).forEach(([category, movies]) => {
        newMoviesState[category] = movies.map((movie) => {
          const isMovieToUpdate = movie.id === movieId;
          let likesCount = movie.likes;
          let dislikesCount = movie.dislikes;

          if (isMovieToUpdate) {
            dislikesCount = movie.dislikes + 1;
            if (movie.hasVoted === 'UP') {
              likesCount = movie.likes - 1;
            }
          }

          const newMovie = {
            ...movie,
            hasVoted: isMovieToUpdate ? 'DOWN' as const : movie.hasVoted,
            likes: likesCount,
            dislikes: dislikesCount
          };

          return newMovie;
        })
      })

      state.movies = newMoviesState;
    }

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      const fetchedMovies: DBMovie[] = action.payload;
      const mappedMovies: RootState['moviesReducer']['movies'] = {};

      fetchedMovies.forEach((movie) => {
        const augmentedMovie = {
          ...movie,
          image: movie?.image || 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
          hasVoted: 'NONE' as const
        };

        if (Array.isArray(mappedMovies[movie.category])) {
          mappedMovies[movie.category].push(augmentedMovie);
        } else {
          mappedMovies[movie.category] = [augmentedMovie];
        }
      })

      state.movies = mappedMovies;
    })
  },
});

export const {
  reset,
  addSelectedCategory,
  removeSelectedCategory,
  deleteMovie,
  upvoteMovie,
  downvoteMovie
} = movies.actions;
export default movies.reducer;
