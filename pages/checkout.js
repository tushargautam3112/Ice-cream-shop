import React from 'react'
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import Link from 'next/link'

const Checkout = ({cart, clearCart, addToCart, removeFromCart, subTotal}) => {
  return (
    <div className='container items-center object-center'>
      <h1 className='font-bold texl-4xl text-center my-8'>Checkout</h1>
      <h2 className='font-semibold text-center text-2xl'>1. Enter Address</h2>
      <div className='m-auto mb-10 md:max-w-[80%] max-w-[90%] items-center object-center'>
        <div className='md:flex'>
          <div className="p-2 md:w-1/2">
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-[#110f11] rounded border-black focus:border-purple-500 focus:bg-[#110f11] focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 md:w-1/2">
            <div className="relative">
              <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-[#110f11] rounded border-black focus:border-purple-500 focus:bg-[#110f11] focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-400">Address</label>
            <textarea id="address" name="address" className="w-full h-28 bg-[#110f11] rounded border-black focus:border-purple-500 focus:bg-[#110f11] focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='md:flex'>
          <div className="p-2 md:w-1/2">
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-gray-400">City</label>
              <input type="text" id="city" name="city" className="w-full bg-[#110f11] rounded border-black focus:border-purple-500 focus:bg-[#110f11] focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 md:w-1/2">
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-gray-400">State</label>
              <input type="text" id="state" name="state" className="w-full bg-[#110f11] rounded border-black focus:border-purple-500 focus:bg-[#110f11] focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className='md:flex'>
          <div className="p-2 md:w-1/2">
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-gray-400">Pincode</label>
              <input type="text" id="pincode" name="pincode" className="w-full bg-[#110f11] rounded border-black focus:border-purple-500 focus:bg-[#110f11] focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 md:w-1/2">
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-gray-400">Phone</label>
              <input type="tel" id="phone" name="phone" className="w-full bg-[#110f11] rounded border-black focus:border-purple-500 focus:bg-[#110f11] focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
      <h2 className='font-semibold text-center text-2xl'>2. Check Cart Items</h2>
      <div className='m-auto md:max-w-[80%] max-w-[86%] sideCart shadow-xl z-[100] bg-[#130e11] p-10 my-10 px-12rounded'>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='text-center font-normal my-3'>No items in the Cart</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='item flex my-5'>
                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                <div className='flex items-center justify-center w-1/3 rounded-full bg-black'>
                  <AiOutlineMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-2 text-lg' />
                  {cart[k].qty}
                  <AiOutlinePlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-2 text-lg' />
                </div>
              </div>
            </li>
          })}
          <span className='total'>Subtotal : {subTotal}</span>
        </ol>
        <button class="flex mx-auto mt-6 text-white bg-yellow-700 border-0 py-1 px-2 focus:outline-none hover:bg-yellow-800 rounded">Pay</button>
      </div>
    </div>

  )
}

export default Checkout