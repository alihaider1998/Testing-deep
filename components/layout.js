import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/router';
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (

        <div className="flex h-screen  flex-col">

            <header style={{width: "125%"}} className="mb-8 py-2   bg-primary border border-orange-800 shadow-lg">
                <div className='text-center'>
                    <Link href="/">
                        <h1 className="text-white cursor-pointer font-semibold text-4xl">DeepSynthBody</h1>
                    </Link>
                    {useRouter().pathname == "/" ?
                        <h1 className=" font-semibold text- mt-3 text-4xl">Get Your Synthetic Dataset Now</h1>
                        : false}
                </div>
            </header>


            <div className=" flex flex-row  justify-start">
                <Sidebar />
                <div className="  container mx-auto max-w-7xl flex-1">
                    {children}
                </div>
            </div>




            <footer style={{width: "125%"}} className="sticky top-[100vh] flex justify-center bg-primary py-4 ">

                <a className='flex' href="https://github.com/simula/deepsynthbody">
                    <span className='mr-2'>Contribute By Uploading Your Model</span>
                    <span><FaGithub size="1.5rem" />
                    </span>
                </a>
            </footer>
        </div>
    )
}
