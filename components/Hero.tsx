import React from 'react'
import Button from './Button'
import Image from 'next/legacy/image'

function Hero () {
    return(
        <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
            <div className="space-y-10">
                <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
                    <span className="block bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent"> Powered</span>
                    <span className="block"> By Intellect</span>
                    <span className="block"> Driven By Values</span>
                </h1>
                <div className="space-x-8">
                    <Button title="Buy Now" />
                    <a className="Link">Learn More</a>
                </div>
            </div>
            <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[550px] lg:w-[500px]">
                <Image src="/iphone.png" layout="fill" objectFit="contain" alt="hero image" />
            </div>
        </section>
    )
}

export default Hero