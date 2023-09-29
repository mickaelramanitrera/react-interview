import type { FC } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { FolderOpen, ThumbsUp, ThumbsDown, X } from 'lucide-react';
import type { Movie } from '@/types';

type MovieCardProps = {
  onUpvote: () => void,
  onDownvote: () => void,
  onDelete: () => void
} & Movie;

export const MovieCard: FC<MovieCardProps> = ({
  image,
  title,
  category,
  likes,
  dislikes,
  onUpvote,
  onDownvote,
  onDelete,
  hasVoted
}) => {
  const likesRatio = (likes / (likes + dislikes)) * 100;
  const dislikesRatio = (dislikes / (likes + dislikes)) * 100;
  return (
    <div className='sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4'>
      <Card className="w-full overflow-hidden rounded-2xl px-0">
        <CardContent className='px-0 h-[200px] relative'>
          <div className='w-full absolute top bg-gradient-to-b from-black from-30% flex flex-rows justify-end'>
            <Button size='icon' variant='ghost' className='right-0' onClick={onDelete}><X /></Button>
          </div>
          <Image
            src={image}
            alt={title}
            objectFit="fill"
            objectPosition="bottom"
            width={500}
            height={300}
          />
        </CardContent>
        <CardFooter className='bg-gradient-to-t from-black from-30% pt-8 pb-3 relative block'>
          <h3 className="block font-semibold text-xl">{title}</h3>
          <div className='flex flex-rows gap-x-2'>
            <FolderOpen className='text-accent' />
            <p className='leading-7 font-light'>{category}</p>
          </div>
          <div className='w-full flex flex-rows items-center gap-x-2'>
            <Toggle variant='outline' size='sm' onClick={onUpvote} defaultPressed={hasVoted === 'UP'}><ThumbsUp className='h-5 w-5' /></Toggle>
            <div className='flex-grow'>
              <div className='flex w-full flex-rows text-xs justify-between'>
                <p>{likes}</p>
                <p>{dislikes}</p>
              </div>
              <div className='w-full flex flex-rows h-[1.5px] overflow-hidden rounded-lg'>
                <div className={`bg-green-400`} style={{ width: `${likesRatio}%` }}></div>
                <div className={`bg-accent`} style={{ width: `${dislikesRatio}%` }}></div>
              </div>
            </div>
            <Toggle variant='outline' size='sm' onClick={onDownvote} defaultPressed={hasVoted === 'DOWN'}><ThumbsDown className='h-5 w-5' /></Toggle>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

