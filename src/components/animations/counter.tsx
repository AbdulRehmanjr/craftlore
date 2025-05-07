'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

type CounterProps = {
  counterValues: { name: string, value: number }[]
}

export const Counter = ({ counterValues }: CounterProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
      {inView && counterValues.map((value, index) => (
        <div className="flex flex-col justify-center text-center py-4" key={index}>
          <CountUp 
            end={value.value} 
            className="text-secondary font-montserrat text-xl sm:text-2xl md:text-3xl" 
          />
          <p className="text-primary font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
            {value.name}
          </p>
        </div>
      ))}
    </div>
  )
}