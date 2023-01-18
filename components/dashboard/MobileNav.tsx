import React from 'react'
import Image from 'next/image'
import dashboard from '../../assets/images/dashboardIcon.svg'
import menuIcon from '../../assets/images/menustyleIcon.svg'
import gamepad from '../../assets/images/gamepad.svg'
import widget from '../../assets/images/widgets.svg'
import location from '../../assets/images/location.svg'
import authentication from '../../assets/images/authentication.svg'
import users from '../../assets/images/users.svg'
import error404 from '../../assets/images/error.svg'
import error505 from '../../assets/images/error5.svg'
import maintence from '../../assets/images/maintenance.svg'
import components from '../../assets/images/components.svg'
import form from '../../assets/images/form.svg'
import setting from '../../assets/images/setting.svg'
import icon from '../../assets/images/icons.svg'
import chevronRight from '../../assets/images/chevronRight.svg'
import { useRouter } from 'next/router'
import user from '../../assets/images/user.svg'
import Language from '../../assets/images/language.svg'



interface mobileNavProps {
    openMenu:boolean
    setOpenMenu:(openMenu:boolean) => void;
}
const MobileNav:React.FC<mobileNavProps> = ({openMenu, setOpenMenu}) => {
    const toggleMenu = ():void => {
        setOpenMenu(!openMenu)
    }

    const sidebarLinks = [{
        title:'Home',
        links:[
            {
                name:'Dashboard',
                icon:dashboard,
                isActive:true
            }, 
            {
                name:'Menu Style',
                icon:menuIcon,
                haslink:true
            }
        ]
    },
    {
        title:'Pages',
        links:[
            {
                name:'Example',
                icon:gamepad,
                haslink:true,
                isActive:false
                
            }, 
            {
                name:'Widgets',
                icon:widget,
                haslink:true
            },
            {
                name:'Maps',
                icon:location,
                haslink:true
            },
            {
                name:'Authentication',
                icon:authentication,
                haslink:true,
                isActive:false
            },
            {
                name:'Users',
                icon:users,
                haslink:true
            },
            {
                name:'Error 404',
                icon:error404,
                isActive:false
            },
            {
                name:'Error 505',
                icon:error505
            },
            {
                name:'Maintence',
                icon:maintence
            }
        ]
    },
    {
        title:'Elements',
        links:[
            {
                name:'Components',
                icon:components,
                haslink:true
            }, 
            {
                name:'Form',
                icon:form,
                haslink:true
            },
            {
                name:'Table',
                icon:setting,
                haslink:true
            },
            {
                name:'icons',
                icon:icon,
                haslink:true
            },
        ]
    }

]



  return (
    <div className={`${openMenu ? 'flex flex-col absolute' : 'hidden'} flex flex-col h-auto bg-[#ffffff] w-full   z-50`}>
    
    <div className='lg:hidden  absolute right-5 p-2 top-2 text-xl flex gap-4 items-center' onClick={toggleMenu}>
        <Image src={user} width={40}/>
        <Image src={Language} width={40}/>
        <div >X</div>
        </div>

    <div className='w-full px-6 mt-[3rem] flex flex-col lg:hidden'>
    {sidebarLinks?.map((i,index) => (
            <div className='my-4 border-b-2 border-b-[#E9ECEF] ' key={index}>
            <h1 className='pl-4 font-[inter-regular] text-[#ADB5BD]'>{i.title}</h1>


            {i.links?.map((link, index) => (
                <div className={`  w-full rounded text-black flex pl-4 py-2 my-2 gap-4  items-center justify-between ${link.isActive ? "bg-[#3A57E8]" : ''}`} key={index}>
                    <div className={`flex gap-2 items-center text-[#8A92A6] ${link.isActive ? 'text-[white]' : ''}`}>
                    <Image src={link.icon} />
                    {link.name}
                    </div>


                    <div className={`flex items-center ${link.haslink ? 'flex' : 'hidden'}`}>
                        <Image src={chevronRight} />
                    </div>
                   
                    
                    
                </div>

                
            ))}
            </div>


    ))}
    </div>
    </div>
  )
}

export default MobileNav