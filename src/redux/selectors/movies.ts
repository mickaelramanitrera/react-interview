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

export const moviesSelector = createDraftSafeSelector(
  (state: RootState) => state?.moviesReducer,
  (moviesReducer) => {
    const selectedCategories = moviesReducer?.selectedCategories;
    const showAll = selectedCategories.includes('Tous');

    if (showAll) {
      return moviesReducer?.movies;
    }

    const filteredMovies: RootState['moviesReducer']['movies'] = {};

    selectedCategories.forEach((category) => {
      (filteredMovies as any)[category] = moviesReducer.movies[category];
    });

    return filteredMovies;
  }
);


