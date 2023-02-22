import React, { useState } from 'react'
import { bookopenIcon, wrenchscrewdriverIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {}

const flexBetween = "flex items-center justify-between"

const Navbar = (props: Props) => {
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full
                     gap-16`}>
                        {/* Left Side */}
                        <img src={Logo} alt="Logo" style={{ width: '5rem' }} />
                        {/* Right Side */}
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} text-sm gap-8`}></div>
                            <div className={`${flexBetween} text-sm gap-8`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar