import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { TfiClose } from 'react-icons/tfi';
import { SidebarItem } from './SidebarItem';
import './Sidebar.css';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const cartItems = useSelector(state => state.cart.cartItems)
  
  const cartItemList = cartItems.map((item, index) =>
    <SidebarItem key={index} product={item} />
  )

  let cartItemTotalPrice = 0

  cartItems.forEach(item => {
    cartItemTotalPrice += item.price
  })

  return (
    <>
      {!isOpen ?
        (
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-10 left-10 rounded-full hover:bg-slate-900 hover:scale-150 transition text-white bg-slate-800 p-6 transform scale-125 text-right cursor-pointer ease-in-out duration-300"
          >
            <MdShoppingCartCheckout />
          </div>  
        ) :
        (
          <button onClick={() => setIsOpen(!isOpen)} className="z-10 fixed top-6 right-6 text-xl text-slate-600 hover:text-slate-900 transform hover:scale-125 transition">
            <TfiClose />
          </button>
        )
      }
      <div className={`sidebar fixed top-0 right-0 bg-slate-100 md:w-1/3 w-full h-full p-10 ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="relative h-full">
          <h2 className="text-5xl">My Order</h2>
          {cartItems.length > 0 ? (
            <div className="sidebar-item-list my-4 overflow-auto">
              {cartItemList}
            </div>
          ) : (
            <span className="block my-4 text-gray-500 text-2xl">Empty</span>
          )}
          <div className="absolute bottom-6 w-full">
            <div className="flex justify-between items-center block mb-10">
              <span className="text-4xl">Total</span>
              <span className="text-5xl">{(cartItemTotalPrice / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
            <div className="text-center">
              <button className="sidebar-checkout-button block bg-black hover:bg-neutral-900 text-white w-full py-6 text-xl">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}