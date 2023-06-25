import Image from 'next/image'
import {AccordionDemo} from '@/components/accordion'

export default function Home() {
  return (
    <div>
    <div> 
      <h1 className='underline underline-offset-8 text-4xl font-bold text-center'>Welcome to my 
      App Shadcn UI - Accordion</h1>
      <br/> 
    </div>
    <AccordionDemo/>
    </div>
  )
}
