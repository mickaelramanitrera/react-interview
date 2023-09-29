'use client'

import type { FC } from 'react';
import { Toggle } from "@/components/ui/toggle";
import { addSelectedCategory, removeSelectedCategory } from '@/redux/features/moviesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectedCategoriesSelector } from "@/redux/selectors/movies";

type CategoryType = {
  label: string,
  selected: boolean
}

export const CategoryMenu: FC<{ categories: CategoryType[] }> = ({ categories = [] }) => {

  const selectedCategories = (useAppSelector(selectedCategoriesSelector)).map((category) => category.toLowerCase());
  const categoriesWithSelection = categories.map((category) => {
    if (!category?.label || !selectedCategories.length) {
      return category;
    }
    const isMatchingCategory =
      selectedCategories.includes(category?.label?.toLowerCase())

    return { ...category, selected: isMatchingCategory }
  });
  const dispatch = useAppDispatch();

  return (
    <div className='flex flex-rows gap-x-3'>
      {
        categoriesWithSelection.map(({ label = 'UNKNOWN LABEL', selected = false }, index) => (
          <Toggle
            key={`togggle-genre-${index}`}
            aria-label={label}
            variant="outline"
            defaultPressed={selected}
            pressed={selected}
            onPressedChange={(pressed) => {
              if (pressed) {
                return dispatch(addSelectedCategory(label))
              }

              return dispatch(removeSelectedCategory(label));
            }}
          >
            {label}
          </Toggle>
        ))
      }
    </div>
  )
}
