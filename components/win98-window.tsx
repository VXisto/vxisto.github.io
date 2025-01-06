import { ReactNode } from 'react'

interface Win98WindowProps {
  title: string
  children: ReactNode
}

export function Win98Window({ title, children }: Win98WindowProps) {
  return (
    <div className="border-2 border-gray-400 shadow-[2px_2px_0_0_#000] bg-[#c0c0c0] dark:bg-gray-800 max-w-3xl mx-auto">
      <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between">
        <span className="text-sm font-bold">{title}</span>
        <div className="flex items-center space-x-1">
          <button className="w-4 h-4 bg-[#c0c0c0] border border-gray-600 flex items-center justify-center text-black text-xs font-bold">_</button>
          <button className="w-4 h-4 bg-[#c0c0c0] border border-gray-600 flex items-center justify-center text-black text-xs font-bold">□</button>
          <button className="w-4 h-4 bg-[#c0c0c0] border border-gray-600 flex items-center justify-center text-black text-xs font-bold">X</button>
        </div>
      </div>
      <div className="p-4 text-black dark:text-white">
        {children}
      </div>
    </div>
  )
}

