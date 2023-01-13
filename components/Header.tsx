import React from 'react'
import Link from 'next/link';
import Image from "next/legacy/image";
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import { selectCartItems } from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import { signIn, signOut, useSession } from 'next-auth/react';

function Header() {

    const { data: session } = useSession();
    const items = useSelector(selectCartItems)

    return (
        <header className="border-b-2 sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
            <div className="flex items-center justify-center md:w-1/5">
                <Link href="/">
                    <div className="relative w-5 cursor-pointer opacity-75 h-10 transition hover:opacity-100">
                        <Image 
                            src="https://rb.gy/vsvv2o"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>
            </div>
            <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
                <a className="headerLink">Product</a>
                <a className="headerLink">Explore</a>
                <a className="headerLink">Support</a>
                <a className="headerLink">Business</a>
            </div>
            <div className="flex items-center justify-center gap-x-4 md:w-1/5">
                <SearchIcon className="headerIcon" />
                <Link href="/checkout">
                    <div className="relative cursor-pointer">
                        {items.length > 0 && (
                            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-[12px] text-white">
                            {items.length}
                         </span>
                        )}
                        <ShoppingBagIcon className="headerIcon" />
                    </div>
                </Link>
                {session ? (
                    <Image
                    src={
                       session.user?.image ||
                      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                    }
                    alt="avatar"
                    className="cursor-pointer rounded-full"
                    width={34}
                    height={34}
                    onClick={() => signOut()}
                  />
                ) : (
                  <UserIcon 
                    className="headerIcon" 
                    onClick={() => signIn()} 
                 />
                )}
            </div>
        </header>
    )
 }

export default Header 