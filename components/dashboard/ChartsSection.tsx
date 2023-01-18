import React from 'react'
import {Chart} from 'react-google-charts'
import Image from 'next/image'
import downArrow from '../../assets/images/downArrow.svg'
import sales from '../../assets/images/salesEllipse.svg'
import cost from '../../assets/images/costEllipse.svg'
import enterpriseChart from '../../assets/images/enterpriseClients.png'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import adidasLogo from '../../assets/images/adidasLogo.svg'
import adidasContact from '../../assets/images/adidasContact.svg'
import bootstrapLogo from '../../assets/images/bootstrapLogo.svg'
import bootstrapTechLogo from '../../assets/images/bootstrapTechnologiesContact.svg'
import communityFirstLogo from '../../assets/images/communityFirstLogo.svg'
import communityFirstContact from '../../assets/images/communityFirstContact.svg'
import netflixLogo from '../../assets/images/netflixLogo.svg'
import netflixContactLogo from '../../assets/images/netflixContact.svg'
import shopifiLogo from '../../assets/images/shopifiLogo.svg'
import shopifiContact from '../../assets/images/shopifiContact.svg'
import slider60 from '../../assets/images/slider60.svg'
import slider25 from '../../assets/images/slider25.svg'
import slider75 from '../../assets/images/slider75.svg'
import slider100 from '../../assets/images/slider100.svg'

const ChartsSection:React.FC = () => {
    

    const userData = useSelector((state:RootState) => state.auth.userData)
  
 
    const data = [
        ["",""],
        ['Jan', userData[0]?.gross_sales.jan],
        ['Feb', userData[0]?.gross_sales.feb],
        ['Mar', userData[0]?.gross_sales.mar],
        ['Apr', userData[0]?.gross_sales.apr],
        ['May', userData[0]?.gross_sales.may],
        ['Jun', userData[0]?.gross_sales.jun],
        ['Jul', userData[0]?.gross_sales.jul],
        ['Aug', userData[0]?.gross_sales.aug],
    ]

    const option ={
        curveType: "function",
        legend: { position: "none" },
        chartArea : {top:'15%',width:'85%',height:'75%', left:'10%'},
    }


    const pieChartData = [
        ["",""],
        ["Fashion",.251],
        ["Accessories",.176]
    ]

    const pieChartOptions= {
        is3D: false,
        slices:[
            {color:"#3A57E8"},
            {color:"#85F4FA"}
        ],
        pieHole:0.9,
        legend:
            {position: 'center', textStyle: {color: '#8A92A6', fontFamily:"inter-bold" ,fontSize: 9}}
        
    }

    const barChartData = [
        ["",""],
        ['S',70],
        ['M',110],
        ['T',82],
        ['W',120],
        ['T',82],
        ['F',130],
        ['M',50] ,  
        ['T',90],
        ['W',82] , 

    ]

    
    const options = {
       
      };

      const grossSales =  userData[0]?.gross_sales.jan + userData[0]?.gross_sales.feb + userData[0]?.gross_sales.mar + userData[0]?.gross_sales.apr + userData[0]?.gross_sales.may + userData[0]?.gross_sales.jun + userData[0]?.gross_sales.jul + userData[0]?.gross_sales.aug

  

   

  return (
    <div className='w-full h-auto w-full flex flex-col gap-8'>
        <div className='bg-[white] h-auto lg:h-auto w-full rounded-md flex flex-col justify-between px-2 py-6 '>
            <div className='flex justify-between  inter-[light] text-[#8A92A6] mb-3 llg:flex-row'>
                <div className='px-4'>
                    <h2 className='text-[#232D42] font-[inter-medium]'>${grossSales.toLocaleString().slice(0,3)}K</h2>
                    <p className=''>Gross Sales</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='flex gap-2 items-center'><Image src={sales} />Sales</div>
                    <div className='flex gap-2 items-center'><Image src={cost} />Cost</div>
                </div>

                <div className='hidden lg:flex gap-2 items-center'>
                        <p className='font-[inter-light] text-[#8A92A6]'>This week</p>
                        <Image src={downArrow} width={12}/>
                    </div>
            </div>

            
            <Chart 
             chartType='Line'
             width="95%"
             height="100%"
             data={data}
             options={option} />
        </div>


{/* -------------- */}
        <div className='flex flex-col w-full justify-between h-auto lg:h-[20rem] gap-4 lg:flex-row'>
            <div className='rounded-md w-full lg:w-5/12 h-full bg-white'>
            <div className='w-full flex justify-between items-center py-4 px-2'>
                    <p className='font-[inter-medium]'>
                    Earnings
                    </p>

                    <div className='flex gap-2'>
                        <p className='font-[inter-light] text-[#8A92A6]'>This week</p>
                        <Image src={downArrow} width={12}/>
                    </div>
                </div>
                <Chart 
                chartType='PieChart'
                width="100%"
                height="80%"
                data={pieChartData}
                options={pieChartOptions} />
            </div>


            <div className='rounded-md w-full lg:w-7/12 h-full bg-white flex flex-col items-center justify-center px-2 py-4 gap-4'>
                <div className='w-full flex justify-between items-center'>
                    <p className='font-[inter-medium]'>
                    Conversions
                    </p>

                    <div className='flex gap-2'>
                        <p className='font-[inter-light] text-[#8A92A6]'>This week</p>
                        <Image src={downArrow} width={12}/>
                    </div>
                </div>
                <Chart 
                chartType='Bar'
                width="100%"
                height="95%"
                data={barChartData}
                options={options} />
            </div>
        </div>


        <div>
      
        </div>



        <div className=' bg-white rounded-md h-[30rem] p-2 gap-4 w-screen lg:w-full overflow-x-scroll lg:overflow-x-hidden'>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-2'>
               <h1>Enterprise Clients</h1>

               <p className='text-sm text-[#8A92A6] font-[inter-light]'>15 New Acquired ths month</p>
            </div>

            <div className='flex'>
            <Image src={downArrow} />
            </div>
        </div>


        
        <div className=' flex flex-col'>

                 <div className='p-2 mt-2 bg-[#F5F6FA] text-[#8A92A6] flex justify-start w-screen gap-6 lg:gap-2 lg:w-full overflow-x-scroll lg:overflow-x-hidden'>
                 <div className='w-max lg:w-4/12 '>
                    <h2>COMPANIES</h2>
                 </div>
                 <div className='w-max lg:w-4/12'>
                    <p>CONTACT</p>
                 </div>
                 <div className='w-max lg:w-4/12'>
                    <p>ORDERS</p>
                 </div>
                 <div className='w-max lg:w-4/12'>
                    <p>COMPLETION</p>
                 </div>
        </div>

        <div className='h-auto flex mt-2 gap-6 lg:gap-2 h-[22rem] '>
            <div className='flex flex-col  w-screen lg:w-4/12 overflow-x-scroll lg:overflow-x-hidden'>
                <div className='flex h-1/5 items-center gap-4' >
                <Image src={adidasLogo} />
                <p>Adidas</p>
                </div>

                <div className='flex h-1/5 items-center gap-4'>
                <Image src={netflixLogo} />
                <p>Netflix</p>
                </div>

                <div className='flex h-1/5 items-center gap-4'>
                <Image src={shopifiLogo} />
                <p>Shopifi Stores</p>
                </div>

                <div className='flex h-1/5 items-center gap-4'>
                <Image src={bootstrapLogo} />
                <p>Bootstrap Technologies</p>
                </div>

                <div className='flex h-1/5 items-center gap-4'>
                <Image src={communityFirstLogo} />
                <p>Community First</p>
                </div>
               
            </div>
            <div className='w-screen lg:w-4/12 overflow-x-scroll lg:overflow-x-hidden'>
                <div className='h-full justify-evenly items-start flex flex-col pl-2 '>
                <Image src={adidasContact} />
                <Image src={netflixContactLogo} />
                <Image src={shopifiContact} />
                <Image src={bootstrapTechLogo} />
                <Image src={communityFirstContact} />

                </div>
               
            </div>
            <div className='w-screen lg:w-4/12 overflow-x-scroll lg:overflow-x-hidden'>
            <div className='h-full justify-evenly items-start flex flex-col pl-2'>
                <p className='flex '>$14,000</p>
                <p>$30,000</p>
                <p>$8,500</p>
                <p>$20,500</p>
                <p>$9,800</p>
                </div>

            </div>
            <div className='w-screen lg:w-4/12 overflow-x-scroll lg:overflow-x-hidden'>
                <div className='flex flex-col h-1/5'>
                    <p>60%</p>
                    <Image src={slider60} />
                </div>

                <div className='flex flex-col h-1/5'>
                    <p>25%</p>
                    <Image src={slider25} />
                </div>

                <div className='flex flex-col h-1/5'>
                    <p>100%</p>
                    <Image src={slider100} />
                </div>

                <div className='flex flex-col h-1/5'>
                    <p>100%</p>
                    <Image src={slider100} />
                </div>

                <div className='flex flex-col h-1/5'>
                    <p>75%</p>
                    <Image src={slider75} />
                </div>
            </div>
        </div>
        </div>
     
       
        </div>




        </div>
  )
}

export default ChartsSection