import { useState } from 'react'
import AccordionItem from '@/components/atom/AccordionItem'
import type { AccordionProps } from '@/type/PropsType'

function Accordion({ title, data }: AccordionProps) {
  const [obenedID, setObenedID] = useState('')

  return (
    <div className="mx-auto mt-5 w-full overflow-hidden pb-40 ">
      <h1 className="pb-3 text-sm font-bold text-dark dark:text-bodydark2 ">{title}</h1>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          id={item.id}
          open={obenedID === item.id}
          setOpen={setObenedID}
          title={item.title}
          content={item.content}
        ></AccordionItem>
      ))}
    </div>
  )
}

export default Accordion
