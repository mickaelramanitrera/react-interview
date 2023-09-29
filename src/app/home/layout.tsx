import type { ReactElement } from 'react';

export default ({ children }: { children: ReactElement }) => (
  <div className='h-screen w-screen overflow-auto dark bg-gray-950'>
    <div className='sticky top-0 h-20 px-10 bg-black/80 z-50 backdrop-blur-sm flex flex-rows items-center shadow-xl'>
      <div className='font-extrabold text-red-600 text-2xl tracking-widest'>NOTFLIX</div>
    </div>
    <div className='px-10 py-3'>
      {children}
    </div>
  </div>
)
