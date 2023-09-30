import { createDraftSafeSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const categorySelector = createDraftSafeSelector(
  (state: RootState) => state?.moviesReducer?.movies,
  (moviesState) => ['Tous', ...Object.keys(moviesState)].map((category) => ({
    label: category,
    selected: false
  }))
);

export const selectedCategoriesSelector = createDraftSafeSelector(
  (state: RootState) => state?.moviesReducer?.selectedCategories,
  (selectedCategoriesState) => selectedCategoriesState
);

const paginate = (movies: RootState['moviesReducer']['movies'], state: RootState['moviesReducer']) => {
  const paginatedMovies: RootState['moviesReducer']['movies'] = {};
  const categories = Object.keys(movies);
  const flattenMovies = Object.values(movies).flat();
  const flattenPaginatedMovies = flattenMovies.slice((state.currentPage - 1) * state.pageSize, state.currentPage * state.pageSize)
  categories.forEach((category) => {
    paginatedMovies[category] = [];
  });


  flattenPaginatedMovies.forEach((paginatedMovie) => {
    const paginatedMovieCategory = paginatedMovie.category;
    paginatedMovies[paginatedMovieCategory].push(paginatedMovie);
  });


  return paginatedMovies;
}

export const moviesSelector = createDraftSafeSelector(
  (state: RootState) => state?.moviesReducer,
  (moviesReducer) => {
    const selectedCategories = moviesReducer?.selectedCategories;
    const showAll = selectedCategories.includes('Tous');

    if (showAll) {
      return paginate(moviesReducer?.movies, moviesReducer);
    }

    const filteredMovies: RootState['moviesReducer']['movies'] = {};

    selectedCategories.forEach((category) => {
      (filteredMovies as any)[category] = moviesReducer.movies[category];
    });


    return paginate(filteredMovies, moviesReducer);
  }
);


