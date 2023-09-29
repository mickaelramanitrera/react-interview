export type Movie = {
  title: string;
  image: string;
  likes: number;
  dislikes: number;
  category: string;
  hasVoted: 'UP' | 'DOWN' | 'NONE'
}

