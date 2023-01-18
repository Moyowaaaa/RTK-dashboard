import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import Submit from '../assets/images/submit.svg'
import Link from 'next/link'

const Email:NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center " >
        <div className='w-full h-screen flex'>
        <div className='w-full  flex gap-8 flex-col items-center justify-center lg:w-6/12' id="signup-page">
            <Image src={Submit}/>
            <h2 className='font-[inter-bold] text-6xl  text-[#0048B2]'>Success !</h2>
                <p className='text-center font-[inter-regular] text-[#232D42]'>A email has been send to your email@domain.com. Please check for an <br/> email from company and click on the included link to reset your <br/> password.</p>
            
                <Link href='/'><button className='mx-auto w-max py-2 px-12 text-white bg-[#3A57E8] rounded'>Back to home </button></Link>
            </div>
            

        <div className='signup-page w-6/12 hidden lg:block'></div>
        </div>
    </div>
  )
}

export default Email