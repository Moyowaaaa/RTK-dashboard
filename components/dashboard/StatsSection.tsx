import React from 'react'
import Image from 'next/image'
import Sales from '../../assets/images/sales.svg'
import Profit from '../../assets/images/profit.svg'
import Cost from '../../assets/images/cost.svg'
import Revenue from '../../assets/images/revenue.svg'
import Income from '../../assets/images/income.svg'
import Today from '../../assets/images/today.svg'
import rightArrow from '../../assets/images/rightarrow.svg'
import leftArrow from '../../assets/images/leftarrow.svg'
import StatsCard from './StatsCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'



const StatsSection:React.FC = () => {
    const userData = useSelector((state:RootState) => state.auth.userData)
    

    const stats = [{stat:'Total Sales', count:`${userData[0]?.total_sales}`, icon:Sales,},
    {stat:'Total Profit', count:`${userData[0]?.total_profit}`, icon:Profit},
    {stat:'Total Cost', count:`${userData[0]?.total_cost}`, icon:Cost},
    {stat:'Revenue', count:`${userData[0]?.revenue}`, icon:Revenue},
    {stat:'Net Income', count:`${userData[0]?.net_income}`, icon:Income},
    {stat:'Today', count:`${userData[0]?.today_sales}`, icon:Today},

]

  return (
    <div className='absolute w-screen lg:w-10/12  top-64 lg:top-48  flex flex-col overflow-x-scroll lg:overflow-x-hidden'>
    <div className='flex w-full py-4 px-6 gap-4 items-center'>
        <div className='  w-full h-max flex items-center absolute left-6 lg:overflow-x-hidden'>
            <Image src={leftArrow} />
        </div>
        {stats.map((stat,index) => (
    <StatsCard data={stat} key={index} />
        ))}
        <div className=' h-max flex items-center absolute right-8'>
            <Image src={rightArrow} />
        </div>
    </div>
    </div>
  )
}

export default StatsSection