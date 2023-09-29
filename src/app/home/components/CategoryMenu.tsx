import type { FC } from 'react';
import { Toggle } from "@/components/ui/toggle";

type CategoryType = {
  label: string,
  selected: boolean
}

export const CategoryMenu: FC<{ categories: CategoryType[] }> = ({ categories = [] }) => {
  return (
    <div className='flex flex-rows gap-x-3'>
      {
        categories.map(({ label = 'UNKNOWN LABEL', selected = false }, index) => (
          <Toggle
            key={`togggle-genre-${index}`}
            aria-label={label}
            variant="outline"
            defaultPressed={selected}
          >
            {label}
          </Toggle>
        ))
      }
    </div>

  )
}
