import React from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { RiAccountCircleFill } from 'react-icons/ri'

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
    // console.log({cart, addToCart, removeFromCart, clearCart, subTotal})
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
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-start text-gray-300 body-font bg-[#110f11] py-2 shadow-xl duration-500 sticky top-0 z-10">
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
            <div className='cart absolute right-0 top-4 mx-5 cursor-pointer flex gap-2'>
                <Link href={'/login'}><RiAccountCircleFill className='text-2xl'/></Link>
                <AiOutlineShoppingCart onClick={toggleCart} className='text-2xl'/>
            </div>
            <div ref={ref} className={`h-[100vh] sideCart shadow-xl z-[100] absolute top-0 right-0 bg-[#1f171c] p-10 transition-transform ${Object.keys(cart).length === 0 ? 'translate-x-full' : 'translate-x-0' } transform w-72 shadow-[#120d10]`}>
                <h2 className='font-bold text-xl text-center'>Shooping cart</h2>
                <span onClick={toggleCart} className='absolute top-4 right-4 cursor-pointer'><AiOutlineClose className='text-2xl'/></span>
             <ol className='mx-3 ml-8 list-decimal font-semibold'>
                { Object.keys(cart).length == 0 && <div className='text-center font-normal my-3'>No items in the Cart</div> }
                { Object.keys(cart).map((k) => {
                    return <li key={k}>
                        <div className='item flex my-5'>
                            <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                            <div className='flex items-center justify-center w-1/3 rounded-full bg-black'>
                            <AiOutlineMinus onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='mx-2 text-lg'/>
                            {cart[k].qty} 
                            <AiOutlinePlus onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='mx-2 text-lg'/>
                            </div>
                        </div>
                    </li>
                })}
             </ol>
             <div className='total text-center'>Subtotal : {subTotal}</div>
             <div className='flex'>
             <Link href={'/checkout'}><button class="flex mx-auto mt-6 text-white bg-yellow-700 border-0 py-1 px-2 focus:outline-none hover:bg-yellow-800 rounded">Checkout</button></Link>
             <button onClick={clearCart} class="flex mx-auto mt-6 text-white bg-yellow-700 border-0 py-1 px-2 focus:outline-none hover:bg-yellow-800 rounded">Clear Cart</button>
             </div>
            </div>
        </div>
        </>
    )
}

export default Navbar