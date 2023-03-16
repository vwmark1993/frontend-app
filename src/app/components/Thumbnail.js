import React from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../features/cart/cartSlice';
import { BiCartAdd } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import './Thumbnail.css';

export function Thumbnail({ product }) {
  const dispatch = useDispatch()

  return (
    <div className="thumbnail text-left border rounded">
      <div className="h-2/3 thumbnail-image">
        <img src={product.images[0]} alt={product.name} className="object-contain w-full h-full" />
      </div>
      <div className="h-1/3 thumbnail-base p-2 font-semibold relative">
        <div className="thumbnail-name">
          <span className="block truncate">{product.name}</span>
          <div className="flex text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="thumbnail-price absolute bottom-3 w-full">
          <div className="flex justify-between items-center">
            <span className="block">{(product.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            <div onClick={() => dispatch(addCartItem(product))} className="rounded-full text-red-500 bg-slate-200 hover:text-red-600 hover:bg-slate-300 hover:scale-125 transition mr-8 p-2 transform scale-110 text-right cursor-pointer">
              <BiCartAdd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
