import exportMarkdown from "@/utils/exportMarkdown";

interface ExportOptionsProps {
    fileName: string;
    content: string;
}

export default function ExportOptions({ fileName, content }: ExportOptionsProps) {
  return (
    <nav className='flex flex-col text-[14px] bg-menu px-4'>
      <button className='py-2 border-b-[0.5px] border-b-gray-400/20 cursor-pointer' onClick={() => exportMarkdown(fileName, content)}>Exportar em MD</button>
      <button className='py-2 cursor-pointer'>Exportar em PDF</button>
    </nav>
  )
}
