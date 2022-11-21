import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
<<<<<<< HEAD
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import Navbar from './navbar'
=======
import { useRouter } from 'next/router';
import Sidebar from "./Sidebar";
import React, { useState, useEffect, } from "react";
>>>>>>> b3b193f09624f99e5782c1bf80242c09acc73e19

export default function Layout({ children }) {
    const [isSmallScreen, setSmallScreen] = useState(false);
    const [isBigScreen, setBigScreen] = useState(false);

    const router = useRouter();
    useEffect(() => {
        if (window.matchMedia("(max-width: 430px)").matches && router.query.detail) {
            setSmallScreen(true)
        } else { setSmallScreen(false) }

        if (window.matchMedia("(min-width: 430px)").matches && router.query.detail) {
            setBigScreen(true)
        } else { setBigScreen(false) }
    }, [isSmallScreen, router.query.detail]);

    return (
<<<<<<< HEAD
        <div className="flex h-screen flex-col">
            <Navbar />
            <br />

            {/* 
            <header className="mb-8 py-2 justify-center bg-primary border border-orange-800 shadow-lg">
=======

        <div
            style={isBigScreen ? { width: "108%" } : { width: "100%" }}
            className="flex h-screen  flex-col">

            <header style={isSmallScreen ? { width: "125%" } : { width: "100%" }}
                className="mb-8 py-2   bg-primary border border-orange-800 shadow-lg">
>>>>>>> b3b193f09624f99e5782c1bf80242c09acc73e19
                <div className='text-center'>
                    <Link href="/">
                        <h1 className="text-white cursor-pointer font-semibold text-4xl">DeepSynthBody</h1>
                    </Link>
                    {useRouter().pathname == "/" ?
                        <h1 className=" font-semibold text- mt-3 text-4xl">Get Your Synthetic Dataset Now</h1>
                        : false}
                </div>
            </header> */}

<<<<<<< HEAD
            <div className=" flex flex-row justify-start mt-2">
                <Sidebar />
                <div className=" h-900 mx-auto max-w-7xl flex-1 ml-10">
=======

            <div className=" flex flex-row  justify-start">
                <Sidebar />
                <div className="  container mx-auto max-w-7xl flex-1">
>>>>>>> b3b193f09624f99e5782c1bf80242c09acc73e19
                    {children}
                </div>
            </div>

<<<<<<< HEAD
            <footer className="sticky top-[100vh] flex justify-center bg-primary py-4 ">
                <a
                    className="flex"
                    href="https://github.com/simula/deepsynthbody"
                >
                    <span className="mr-2">
                        Contribute By Uploading Your Model
                    </span>
                    <span>
                        <FaGithub size="1.5rem" />
=======

            <footer
                style={isSmallScreen ? { width: "125%" } : { width: "100%" }}
                className="sticky top-[100vh] flex justify-center bg-primary py-4 ">

                <a className='flex' href="https://github.com/simula/deepsynthbody">
                    <span className='mr-2'>Contribute By Uploading Your Model</span>
                    <span><FaGithub size="1.5rem" />
>>>>>>> b3b193f09624f99e5782c1bf80242c09acc73e19
                    </span>
                </a>
            </footer>
        </div>
    )
}
