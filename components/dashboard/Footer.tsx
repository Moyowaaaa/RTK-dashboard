import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className='py-4 px-4 bg-[white] flex flex-col lg:justify-between items-center lg:flex-row gap-2'>
        <div className='flex gap-4 text-sm font-[inter-regular] text-xs lg:text-base'>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
        </div>


        <div className='font-[inter-regular] text-xs lg:text-base'>
        © 2021 Hope UI, Made with ❤ by <span className='text-[#3A57E8]'>IQONIC Design.</span>
        </div>

    </div>
  )
}

export default Footer