'use client'

import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from "rehype-sanitize";
import Menu from '@/components/menu';

export default function Home() {
  const [content, setContent] = useState<string>(`# Olá, Markdown!`);
  const [fileName, setFileName] = useState("Documento_sem_título");

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16 pt-20 pb-4 px-4 font-[family-name:var(--font-geist-sans)] bg-background">
      <main className="w-full h-screen-minus-20 flex gap-[16px] row-start-2 items-center sm:items-start">

      <Menu fileName={fileName} setFileName={setFileName} content={content}/>
        
        <div className='w-1/2 h-full rounded-md border-gray-400/20 border'>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='w-full h-full p-4 flex wrap-break-word border-0 outline-0 resize-none text-erie-black dark:text-anti-flash-white'
            placeholder='Digite seu markdown aqui...'
          />

        </div>
        
        <div className='w-1/2 h-full p-4 overflow-auto wrap-break-word rounded-md border-gray-400/20 border'>
          <div className='prose dark:prose-invert text-erie-black dark:text-anti-flash-white'>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSanitize]}>{content}</Markdown>
          </div>
        </div>
        
      </main>     
    </div>
  );
}
