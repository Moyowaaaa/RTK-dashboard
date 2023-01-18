import React from 'react'
import Image from 'next/image'

interface statsProps{
 data:{
    stat:string,
    count:string,
    icon:string,
 }
}
const StatsCard:React.FC<statsProps> = ({data}) => {


  return (
<div className='h-[10rem]  lg:h-[7rem] lg:w-2/12 bg-[#FFFFFF] rounded-md shadow text-[#232D42]'>
<div className='h-full lg:w-full w-[10rem] items-center flex flex-col lg:flex-row  lg:py-4 justify-center gap-2 lg:p-4  lg:px-0 lg:items-start'>
    
    <Image src={data.icon} />
    <div className='flex flex-col justify-between pb-3 lg:h-full'>
        <p className='text-xs lg:text-base text-[#8A92A6] font-[inter-regular]'>{data.stat}</p>
        <p className='text-xs lg:text-base font-[inter-medium]'>${data.count.slice(0,3)}K</p>
    </div>
</div>

</div>
  )
}

export default StatsCard