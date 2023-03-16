import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../../features/cart/cartSlice';
import './SidebarItem.css';

export function SidebarItem({ product }) {
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(deleteCartItem(product))} className="sidebar-item flex my-4 p-2 rounded border hover:border-red-500 transition cursor-pointer">
      <div className="w-1/2 flex justify-center items-center">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="w-1/2 m-4 relative">
        <div className="mb-1">
          <span className="text-2xl line-clamp-2">{product.name}</span>
        </div>
        <div className="absolute bottom-3 w-full">
          <div className="flex justify-between text-2xl">
            <span className="text-gray-500">{(product.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            <span className="">{product.quantity}x</span>
          </div>
        </div>
      </div>
    </div>
  );
}