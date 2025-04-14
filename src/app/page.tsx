'use client'

import { useState } from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Home() {
  const [content, setContent] = useState<string>('# Olá, Markdown!')

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16 pt-20 pb-4 px-4 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-screen-minus-20 flex gap-[16px] row-start-2 items-center sm:items-start">
        
        <div className='w-1/2 h-full'>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='w-full h-full p-2 flex wrap-break-word border-0 outline-0 resize-none'
            placeholder='Digite seu markdown aqui...'
          />

        </div>
        
        <div className='w-1/2 h-full p-4 overflow-auto wrap-break-word'>
          <div className='prose dark:prose-invert'>
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
          </div>
        </div>
        
      </main>
      
    </div>
  );
}
