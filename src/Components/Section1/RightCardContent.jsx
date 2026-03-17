import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-4 sm:p-6 flex flex-col justify-between'>
      
      <h2 className='bg-white w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center font-bold text-lg sm:text-2xl'>
        {props.id + 1}
      </h2>

      <div>
        <p className='mb-6 sm:mb-10 text-sm sm:text-lg leading-normal text-white'>
          {props.intro}
        </p>

        <div className='flex justify-between items-center'>
          <button 
            style={{backgroundColor:props.color}} 
            className='px-4 sm:px-10 py-1 sm:py-2 rounded-full text-white text-sm sm:text-base'
          >
            {props.tag}
          </button>

          <button 
            style={{backgroundColor:props.color}} 
            className='text-white p-2 rounded-full'
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
