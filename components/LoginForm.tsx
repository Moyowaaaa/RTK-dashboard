import { ChangeEvent, useCallback, useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Gmail from '../assets/images/Gmail.svg'
import Facebook from '../assets/images/Facebook.svg'
import Instagram from '../assets/images/Instagram.svg'
import LinkedIn from '../assets/images/Linkedin.svg'

import { useRouter } from "next/router";
import { useDispatch } from 'react-redux'

import {  useGetUsersQuery } from "../redux/features/authApiSlice";
import {  loggedInUser } from "../redux/features/authSlice";




const LoginForm:React.FC = () => {



  interface userData {
    firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    meterNumber:number,
    password:string,
    id:1
  }

  const { data: users, refetch } = useGetUsersQuery()

  const router = useRouter()
  const [showError, setShowError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  

  const dispatch = useDispatch()


  const handleEmailInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setShowError(false);
  }, []);

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowError(false);
  };



  const handleSubmit = useCallback((e: Event | any) => {
    e.preventDefault();
    if (users) {
      const user = users.find((item:userData) => item.email.toLowerCase() === email.toLowerCase())
      if (user) {
        localStorage.setItem('userId',user.id)
        if (password === user.password) {
          dispatch(loggedInUser(user))
          router.push(`/dashboard/${user.id}`)
        } else {
          router.push('/')
          setShowError(true)
        }
      } else {
        setShowError(true)
      }
    } else {  
      refetch() 
    }
  }, [email, password, refetch, users]);

  

 
 
    

  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='font-[inter-medium] text-3xl'>Sign In</h1>
            <p className='text-lg font-[inter-light] text-[#8A92A6]'>Sign in to stay connected.</p>
        </div>

        <form className='flex flex-col gap-4'>

            <label className='font-[inter-light] text-[#8A92A6]'>Email</label>
            <input
             className='p-1 rounded border-2 ouline-none border-[#3A57E8]'
            type="text"
            placeholder="e.g. charlie.rau@gmail.com"
            onChange={handleEmailInput}
            />


<label className='font-[inter-light] text-[#8A92A6]'>Password</label>
            <input
              className='p-1 rounded border-2 ouline-none border-[#3A57E8]'
            type='password'
            placeholder="e.g. 1K36FFzDbCNOjk2"
            onChange={handlePasswordInput}
            />


            {showError && <p className='text-xs text-center text-[red]'>There was a problem with your login credentials, please check and try again</p> }

            <div className='w-full flex justify-between items-center text-sm lg:text-base'>
                <div className='font-[inter-light] text-[#8A92A6]'>
                <input type='checkbox' /> Remember me ?
                </div>

                <Link href='/reset'><p className='text-[#3A57E8] font-[inter-medium] cursor-pointer'>Forgot Password ?</p></Link>
            
            </div>

           
<button onClick={handleSubmit} className="mx-auto w-full text-center py-2 px-12 text-white bg-[#3A57E8] font-[inter-regular] rounded lg:w-max" disabled={showError}>
            Sign In
          </button>


                
        </form>

        <div className=' flex flex-col items-center gap-2 text-sm lg:text-base'>

            <p className='font-[inter-light]  text-[#232D42]'> or sign in with other accounts?</p>

      

        <div className='flex gap-4 items-center' >
            <Image src={Gmail} />
            <Image src={Facebook} />
            <Image src={Instagram} />
            <Image src={LinkedIn} />
        </div>

            <p className='font-[inter-light]  text-[#232D42] '>Don't have an account ? <Link href='/signup'><span className='cursor-pointer text-[#3A57E8] font-[inter-medium]'>Click here to sign up</span></Link></p>
       
        </div>
   

    </div>
  )
}

export default LoginForm