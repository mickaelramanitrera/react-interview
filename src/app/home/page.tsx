'use client'

import { MovieCard } from './components/MovieCard';
import { CategoryMenu } from "./components/CategoryMenu";

const categories = [
  { label: 'Tous', selected: true },
  { label: 'Next', selected: false },
  { label: 'Harcore', selected: false },
];

const moviesList = {
  Next: [
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49
    },
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49

    },
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49

    },
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49

    },
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49

    },
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49

    },
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49

    },
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49

    }
  ],
  Hardcore: [
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49

    },
    {
      title: 'Avengers : Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      likes: 100,
      dislikes: 49

    }
  ],
  Horror: []
}

export default () => (
  <>
    <CategoryMenu categories={categories} />
    <div className='py-10'>
      {
        Object.entries(moviesList).map(([category, movies], categoryIndex) => {
          if (movies?.length) {
            return (
              <div className='mb-6' key={`category-${category}-${categoryIndex}`}>
                <h3 className='text-2xl font-semibold mb-4' >{category}</h3>
                <div className='-mx-4 flex flex-rows gap-y-8 flex-wrap justify-start content-stretch'>
                  {
                    movies.map(({ title, image, likes, dislikes }, movieIndex) => (
                      <MovieCard
                        title={title}
                        key={`movie-${movieIndex}`}
                        image={image}
                        category={category}
                        likes={likes}
                        dislikes={dislikes}
                        onUpvote={() => { console.log('upvote') }}
                        onDownvote={() => { console.log('downvote') }}
                        onDelete={() => { console.log('deleted') }}
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
