export type DBMovie = {
  id: string;
  title: string;
  likes: number;
  dislikes: number;
  category: string;
  image?: string;
}

export type Movie = {
  image: string;
  likes: number;
  hasVoted: 'UP' | 'DOWN' | 'NONE'
} & DBMovie;

export type QueryParams = {
  category: string;
}
