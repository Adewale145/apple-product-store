import React from "react"
import Image from "next/legacy/image";
import { urlFor } from "../sanity";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast"

 interface Props {
  product : Product;
 }
 
 function Product({ product}: Props) {
  const dispatch = useDispatch() 

  const addItemToCart = () => {
    dispatch(addToCart(product));

    toast.success(`${product.title} added to cart`, {
      position: "bottom-center",  
    });
  };

   return (
     <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image 
          src={urlFor(product.image[0]).url()} 
          layout="fill" 
          objectFit="contain" 
          alt="product image"
        />
      </div>

        <div className="flex flex-1 items-center justify-between space-x-3">
          <div className="space-y-2 text-x text-white md:text-2xl">
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>

          <div className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-pink-400 md:h-[70px] md:w-[70px]" onClick={addItemToCart}>
            <ShoppingCartIcon className="h-8 w-8 text-white" />
          </div> 
        </div>

     </div>
   )

 }
 
 export default Product