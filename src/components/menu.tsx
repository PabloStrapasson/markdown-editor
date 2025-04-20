'use client'

import Link from "next/link";
import { useState } from "react";
import ExportOptions from "./export-options";

interface MenuProps {
  fileName: string;
  content: string;
  setFileName: (fileName: string) => void;
}

export default function Menu({ fileName, content, setFileName }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 flex w-full h-16 items-end justify-between bg-menu p-4">
        <div className="flex w-full items-center justify-between px-4"> 
            <div className='flex items-center justify-center gap-4'>
              
              <button className='flex flex-col gap-1 cursor-pointer text-white hover:border-b-1 focus:outiline-0' 
                      onClick={() => setIsOpen(!isOpen)}
                      aria-label='Menu'>
                  Arquivo
              </button>

              <Link href="https://www.markdownguide.org/cheat-sheet/" target='_blank' className="text-white text-md hover:border-b-1">Documentação Markdown</Link>
              
              <input type='text' placeholder='Documento sem título' 
                     className='text-white border border-gray-400 outline-0 px-2 rounded-sm'
                     value={fileName}
                     onChange={(e) => setFileName(e.target.value)}
                     ></input>
            </div>

            <h1 className="text-white text-lg">Markdown Live Editor</h1>
        </div>

        <div className={`absolute top-15 left-0 w-auto px-4 rounded-b-md bg-rich-black z-110 transition-all duration-500 ${isOpen ? 'block' : 'hidden'}`}>
            <ExportOptions fileName={fileName} content={content}/>
        </div>
    </nav>
  )
}
