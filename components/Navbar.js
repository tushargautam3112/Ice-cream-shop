import React from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const Navbar = () => {
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else if (!ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef()
    return ( 
        <>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-start text-gray-300 body-font bg-[#110f11] py-2 shadow-xl duration-500">
            <div className='logo'>
                <Image width={200} height={40} src='/logo.jpg' alt='logo'/>
            </div>
            <div className='nav'>
                <ul className='flex items-center space-x-4 md:text-lg'>
                    <Link href={'/icecreams'} ><a> <li>Icecreams</li>  </a></Link>
                    <Link href={'/cakes'} ><a> <li>Cakes</li>  </a></Link>
                    <Link href={'/smoothies'} ><a> <li>Smoothies</li> </a></Link>
                    <Link href={'/cookies'} ><a> <li>Cookies</li>     </a></Link>
                </ul>
            </div>
            <div onClick={toggleCart} className='cart absolute right-0 top-4 mx-5 cursor-pointer'>
                <AiOutlineShoppingCart className='text-3xl'/>
            </div>
            <div ref={ref} className='sideCart absolute top-0 right-0 bg-[#1f171c] p-10 transition-transform translate-x-full transform w-72 '>
                <h2 className='font-bold text-xl text-center'>Shooping cart</h2>
                <span onClick={toggleCart} className='absolute top-4 right-4 cursor-pointer'><AiOutlineClose className='text-2xl'/></span>
             <ol className='list-decimal font-semibold'>
                <li>
                    <div className='item flex my-5'>
                        <div className='w-2/3 font-semibold'>crisp nghjgfja</div>
                        <div className='flex items-center justify-center w-1/3 rounded-full bg-black'>
                           <AiOutlineMinus className='mx-2 text-lg'/>15 <AiOutlinePlus className='mx-2 text-lg'/>
                        </div>
                    </div>
                </li>
             </ol>
            </div>
        </div>
        </>
    )
}

export default Navbar