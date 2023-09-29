'use client'

import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteMovie, upvoteMovie, downvoteMovie } from "@/redux/features/moviesSlice";
import { fetchMovies } from '@/redux/thunks/moviesThunks';
import { categorySelector, moviesSelector } from "@/redux/selectors/movies";
import { MovieCard } from './components/MovieCard';
import { CategoryMenu } from "./components/CategoryMenu";

export default () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.moviesReducer?.isLoading || false);
  const categoriesWithSelectionProp = useAppSelector(categorySelector);
  const moviesListFiltered = useAppSelector(moviesSelector);

  const handleOnDelete = (id: string) => {
    dispatch(deleteMovie(id))
  }

  const handleOnUpvote = (id: string) => {
    dispatch(upvoteMovie(id))
  }

  const handleDownvote = (id: string) => {
    dispatch(downvoteMovie(id))
  }

  useEffect(() => {
    dispatch(fetchMovies())
  }, []);

  if (isLoading) {
    return <div className='w-full h-[350px] flex flex-rows justify-center items-center'>
      <Loader2 className='animate-spin text-accent w-12 h-12' />
    </div>;
  }

  return (
    <>
      <CategoryMenu categories={categoriesWithSelectionProp} />
      <div className={`py-10`}>
        {
          Object.entries(moviesListFiltered).map(([category, movies], categoryIndex) => {
            if (movies?.length) {
              return (
                <div className='mb-6' key={`category-${category}-${categoryIndex}`}>
                  <h3 className='text-2xl font-semibold mb-4' >{category}</h3>
                  <div className='-mx-4 flex flex-rows gap-y-8 flex-wrap justify-start content-stretch'>
                    {
                      movies.map(({ title, image, likes, dislikes, id, hasVoted }, movieIndex) => (
                        <MovieCard
                          id={id}
                          title={title}
                          key={`movie-${movieIndex}`}
                          image={image}
                          category={category}
                          likes={likes}
                          dislikes={dislikes}
                          onUpvote={handleOnUpvote}
                          onDownvote={handleDownvote}
                          onDelete={handleOnDelete}
                          hasVoted={hasVoted}
                        />
                      ))
                    }
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </>
  )
}
