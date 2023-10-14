"use client"

import Button from '@/app/components/button/Button'
import Logo from './Logo'

const Navbar = () => {


    return (
        <div className="flex flex-row items-center justify-between  bg-black h-[80px] fixed w-full ">
            <div className='ml-2'>
                <Logo />
            </div>
            <div className='mr-6'>
                <Button label='Menu' />
            </div>
        </div>
    )
}

export default Navbar;