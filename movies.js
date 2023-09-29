const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    image: '/images/oceans8.jpeg'
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    image: '/images/midnightsun.jpg'
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    image: '/images/indesctructibles.jpeg'
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    image: '/images/sansunbruit.png'
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    image: '/images/creed.jpeg'
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    image: '/images/pulpfiction.jpg'
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    image: '/images/pulpfiction.jpg'
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image: '/images/seven.jpeg'
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image: '/images/inception.jpg'

  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    image: '/images/gonegirl.jpeg'

  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
