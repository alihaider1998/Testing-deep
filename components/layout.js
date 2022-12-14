import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import Navbar from './navbar'
import { useSelector } from "react-redux";

export default function Layout({ children }) {
    const footer = useSelector((state) => state.myFooter.value);

    return (
        <div className="flex h-screen flex-col ">
            <Navbar  />
            <br />
            {/* sm:-mr-0 -mr-9 */}
{/*             
            <header className="mb-8 py-2 justify-center bg-primary border border-orange-800 shadow-lg">
                <div className='text-center'>
                    <Link href="/">
                        <h1 className="text-white cursor-pointer font-semibold text-4xl">DeepSynthBody</h1>
                    </Link>
                    {useRouter().pathname == "/" ?
                        <h1 className=" font-semibold text- mt-3 text-4xl">Get Your Synthetic Dataset Now</h1>
                        : false}
                </div>
            </header> */}

            <div className="flex mt-2">
                <Sidebar />
                <div style={{ width: "15rem"}} className="h-900 flex-1 ">
                    {children}
                </div>
            </div>

            <footer className="sticky top-[100vh] flex justify-center bg-primary py-4 ">
                <a
                    className="flex"
                    href="https://github.com/simulamet-host/deepsynthbody"
                >
                    <span className="mr-2">
                        {footer}
                    </span>
                    <span>
                        <FaGithub size="1.5rem" />
                    </span>
                </a>
            </footer>
        </div>
    )
}
