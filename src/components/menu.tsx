import Link from "next/link";

export default function Menu() {
  return (
    <nav className="fixed top-0 left-0 flex w-full h-16 items-end justify-between bg-black p-4">
        <div className="flex w-full items-center justify-between px-4"> 
            <div className='flex items-center justify-center'>
              <Link href="https://www.markdownguide.org/cheat-sheet/" target='_blank' className="text-white text-md hover:border-b-1">Documentação Markdown</Link>
            </div>
            <h1 className="text-white">Markdown Editor</h1>
        </div>
    </nav>
  )
}
