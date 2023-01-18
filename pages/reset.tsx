import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Reset:NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
           <div className="w-full h-screen flex">
           <div className="main w-11/12 pl-6  flex items-center lg:pl-12 lg:w-6/12">

            <div className='w-full  flex flex-col gap-4 lg:w-7/12'>
                <h1 className='text-3xl font-[inter-medium] text-center'>Reset Password</h1>
                <p className='text-center text-[#8A92A6]'>Enter your email address and we’ll send you an email with instructions to reset your password</p>

                <div className='flex flex-col gap-2'>
                <label className='font-[inter-light] text-[#8A92A6]'>Email</label>
            <input
             className='p-1 rounded border-2 ouline-none border-[#3A57E8]'
            type="text"
            />


            
                </div>

          

                <Link href="/email">
                  <button className='mx-auto w-full text-center my-4  py-2 px-12 text-white bg-[#3A57E8] font-[inter-regular] rounded lg:w-max cursor-pointer' >Reset</button>
                </Link>
        
                
            </div>
           </div>


           <div className="login-page w-6/12 hidden lg:flex"></div>

           </div>
</div>
  )
}

export default Reset