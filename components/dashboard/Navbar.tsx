import React, { SetStateAction } from 'react'
import Image from 'next/image'
import Back from '../../assets/images/back.svg'
import Search from '../../assets/images/Search.svg'
import Notifications from '../../assets/images/Notification.svg'
import Language from '../../assets/images/language.svg'
import Messages from '../../assets/images/messages.svg'
import user from '../../assets/images/user.svg'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


interface navbarProps {
    setOpenMenu:(openMenu:boolean) => void;
    openMenu:boolean
}

const Navbar:React.FC<navbarProps>= ({setOpenMenu, openMenu}) => {
    const router= useRouter()

    const toggleMenu = ():void => {
        setOpenMenu(!openMenu)
    }

    const user = useSelector((state:RootState) => state.auth.user)
    const fullName = user?.firstName + " " + user?.lastName


  return (
    <div className='flex flex-col w-full h-max shadow bg-[#ffffff] '>
    <div className='flex  py-4 justify-between px-2'>

        <div className=' flex items-center gap-4'>
            <div onClick={() => router.push('/')}>
            <Image src={Back} />
            </div>
           

            <div className='border-2 h-full pl-2 gap-2 rounded flex items-center w-[18rem]'>
                <Image src={Search} />
                <input 
                className='px-2 outline-none w-full'
                placeholder='Search...'
                />
            </div>
        </div>

        <div className='  items-center gap-4 pr-12 hidden lg:flex'>
            <Image src={Language} />
            <Image src={Notifications} />
            <Image src={Messages} />

            <Image src={user} />
            <div className='flex flex-col'>
                <h2>{fullName}</h2>
                <h2></h2>
                    <p className='text-[#8A92A6] font-[inter-light] text-xs'>Marketing Administrator</p>
            </div>

            </div>

            <div className='lg:hidden' onClick={toggleMenu}>
                  <svg viewBox="0 0 12 10" className="hamburger" height="40px" width="40px">
            <path d="M10,2 L2,2" className="bar-1"></path>
            <path d="M2,5 L10,5" className="bar-2"></path>
            <path d="M10,8 L2,8" className="bar-3"></path>

        </svg>
            </div>



    </div>
    </div>
  )
}

export default Navbar