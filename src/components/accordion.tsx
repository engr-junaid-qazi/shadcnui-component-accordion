import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="p-20 ml-20">
        <AccordionItem value="item-1" className="mr-96">
          <AccordionTrigger className="font-bold text-lg
          hover: text-red-500 hover:no-underline duration-300">Are you happy with my Web services?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. I am pitty much satisfied with your services and I will recommend to 
            my friends and family members.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mr-96">
          <AccordionTrigger className="font-bold text-lg
          hover: text-green-500 hover: no-underline duration-300">Is it styled?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="mr-96">
          <AccordionTrigger className="font-bold text-lg
          text-blue-500 hover: no-underline duration-300">Is it animated?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  