import type { AccordionItemProps } from '@/type/PropsType'

function AccordionItem({ id, title, content, open, setOpen }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-300">
      <button
        className="flex w-full items-center justify-between py-4 text-left text-[11px] text-[#0D0F52] focus:outline-none"
        onClick={() => setOpen(open ? '' : id)}
      >
        <span className="text-sm font-medium text-dark dark:text-bodydark2">{title}</span>
        <span className={`icon-[oui--arrow-down] text-gray-400 ${open ? 'rotate-180' : ''}`}></span>
      </button>
      <div
        className={`${open ? 'block' : 'hidden'} w-full px-5 py-3 text-xs font-normal text-dark transition delay-150 duration-300 ease-in-out dark:text-bodydark1`}
      >
        {content}
      </div>
    </div>
  )
}

export default AccordionItem
