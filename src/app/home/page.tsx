'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect } from 'react';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  deleteMovie,
  upvoteMovie,
  downvoteMovie,
  updateRowPerPage,
  goToPreviousPage,
  goToNextPage
} from "@/redux/features/moviesSlice";
import { fetchMovies } from '@/redux/thunks/moviesThunks';
import { categorySelector, moviesSelector } from "@/redux/selectors/movies";
import { MovieCard } from './components/MovieCard';
import { CategoryMenu } from "./components/CategoryMenu";

const Page = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.moviesReducer?.isLoading || false);
  const categoriesWithSelectionProp = useAppSelector(categorySelector);
  const moviesListFiltered = useAppSelector(moviesSelector);
  const { currentPage, pageSize, total } = useAppSelector(
    (state) => ({
      currentPage: state.moviesReducer.currentPage,
      pageSize: state.moviesReducer.pageSize,
      total: state.moviesReducer.total
    })
  );

  const handleOnDelete = (id: string) => {
    dispatch(deleteMovie(id))
  }

  const handleOnUpvote = (id: string) => {
    dispatch(upvoteMovie(id))
  }

  const handleDownvote = (id: string) => {
    dispatch(downvoteMovie(id))
  }

  const handlePageSizeChange = (value: string) => {
    dispatch(updateRowPerPage(parseInt(value, 10)));
  }

  const handleGoToNextPage = () => {
    dispatch(goToNextPage());
  }

  const handleGoToPreviousPage = () => {
    dispatch(goToPreviousPage());
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

        <div className='mt-6 flex flex-rows items-center justify-center w-full gap-x-4'>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${pageSize}`}
              onValueChange={handlePageSizeChange}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={'4'} />
              </SelectTrigger>
              <SelectContent side="top">
                {[4, 8, 12].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" size="icon" onClick={handleGoToPreviousPage}>
            <ChevronLeft />
          </Button>
          <p>Page {currentPage} of {Math.ceil(total / pageSize)}</p>
          <Button variant="outline" size="icon" onClick={handleGoToNextPage}>
            <ChevronRight />
          </Button>

        </div>
      </div>
    </>
  )
};

export default Page;
