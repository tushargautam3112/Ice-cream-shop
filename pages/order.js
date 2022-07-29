import React from 'react'

const Order = () => {
  return (
    <div><section className=" body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:pb-6 mb-6 lg:mb-0 my-10">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Crusty Creams</h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">Your Order ID: 43634645</h1>
            <p className="leading-relaxed mb-4">Your Order has been succesfully placed.</p>

            <div class="flex mb-4">
              <a class="flex-grow text-purple-400 border-purple-500 py-2 text-lg">Description</a>
              <a class="flex-grow border-gray-800 py-2 text-lg px-1">Quantity</a>
              <a class="flex-grow border-gray-800 py-2 text-lg px-1">Total</a>
            </div>


            <div className="text-left flex border-t border-gray-800 py-2">
              <span className="mx-auto w-1/3 text-white">Blue</span>
              <span className="mx-auto w-1/3 text-white">Large</span>
              <span className="mx-auto w-1/3 text-white">4</span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="mx-auto w-1/3 text-white">Green</span>
              <span className="mx-auto w-1/3 text-white">Medium</span>
              <span className="mx-auto w-1/3 text-white">6</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="mx-auto w-1/3 text-white">Red</span>
              <span className="mx-auto w-1/3 text-white">Small</span>
              <span className="mx-auto w-1/3 text-white">3</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">Amount: $58.00</span>
              <button className="flex ml-auto text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-800 rounded">Track Your Order</button>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 rounded w-full lg:h-auto h-64 object-cover object-center rounded" src="/order.jpg" />
        </div>
      </div>
    </section></div>
  )
}

export default Order