import exportHTML from "@/utils/exportHTML";
import exportMarkdown from "@/utils/exportMarkdown";

interface ExportOptionsProps {
    fileName: string;
    content: string;
}

export default function ExportOptions({ fileName, content }: ExportOptionsProps) {
  return (
    <nav className='flex flex-col text-[14px] items-start bg-menu px-4'>
      <button className='py-2 border-b-[0.5px] border-b-gray-400/20 cursor-pointer' onClick={() => exportMarkdown(fileName, content)}>Exportar em MD</button>
      <button className='py-2 cursor-pointer' onClick={() => exportHTML(fileName, content)}>Exportar em HTML</button>
    </nav>
  )
}
