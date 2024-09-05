"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        console.log("Toggling mobile menu");
        setIsMobileMenuOpen(!isMobileMenuOpen);
        console.log("isMobileMenuOpen", isMobileMenuOpen);
    }

    return (<>
        <div className="bg-blue text-white px-[20px] md:px-[80px] py-[20px]">
            <div className="flex flex-row items-center">
                <Link className="mr-auto text-base md:text-2xl font-bold flex" href={"/"}>
                    <Image src={"/navbar-logo.svg"} alt={""} width={24} height={24} className="mr-[12px]" />
                    <span>Pienteger</span>
                </Link>
                <div className="hidden md:flex flex-row items-center">
                    <span className="text-sm mr-[24px]">Services</span>
                    <span className="text-sm mr-[24px]">Contact</span>
                    <span className="text-sm mr-[24px]">About Us</span>
                </div>
                <button className="hidden md:block cta-btn">
                    <span className="text-sm font-medium">Start Free</span>

                </button>
                <button className="block md:hidden px-[8px] py-[8px] rounded-[200px] border-white border-[1px]"
                    onClick={toggleMobileMenu}>
                    <span>
                        <Image src={"/menu-03.svg"} alt={""} width={24} height={24}></Image>
                    </span>
                </button>
            </div>
        </div>

        {
            /* Mobile Menu */
            isMobileMenuOpen && (<div className="bg-blue md:hidden flex flex-col min-h-screen text-white py-[40px]"
                hidden={!isMobileMenuOpen}>
                <div className="flex-1 flex flex-col justify-start items-center gap-[40px]">
                    <span className="text-3xl font-medium">Home</span>
                    <span className="text-3xl font-medium">Service</span>
                    <span className="text-3xl font-medium">Contact</span>
                    <span className="text-3xl font-medium">About Us</span>
                </div>
                <div className="px-[20px] flex-initial mx-auto flex gap-[12px]">
                    <button className="cta-btn-filled">
                        <span>Contact Us</span>
                    </button>
                    <button className="cta-btn">
                        <span>Start Free</span>
                    </button>
                </div>
            </div>)
        }



    </>);
}


export default Navbar;