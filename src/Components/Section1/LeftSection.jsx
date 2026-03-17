import { ArrowUpRight } from 'lucide-react'
const LeftSection = () => {
  return (
     <div className='w-full md:w-1/3 h-[90vh] md:h-full flex flex-col justify-between'>
     <div className='p-3'>
       <h2 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-5 leading-[1.2]'>Prospective <br/><span className='text-gray-500'>Customer</span>  <br/> Segmentation</h2>
         <p className='text-gray-600 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sunt ad amet veniam nihil cupiditate quos iste nulla mollitia?</p>
     </div>
     <div className='flex justify-center md:justify-start mt-5 md:mt-0'>
       <ArrowUpRight size={50} />
     </div>
    </div>
  )
}

export default LeftSection
