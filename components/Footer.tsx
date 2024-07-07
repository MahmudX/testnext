import Pipe from "./Pipe";
import logo from '../assets/logo192.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className="bg-black text-white py-3 px-5 md:px-10">
                <div className="flex flex-col md:flex-row gap-3">
                    <a href="/" className="flex items-center gap-2 flex-1">
                        <Image src={logo} alt="Pienteger Logo"
                            className="h-6 w-6" />
                        <h1 className="text-xl font-bold">Pienteger</h1>
                    </a>

                    <div className="flex flex-col md:flex-row gap-1 md:gap-3 font-bold">
                        <a href="https://www.facebook.com/pienteger"
                            target="_blank" rel="noreferrer"
                            className="text-blue-500">
                            Facebook
                        </a>
                        <a href="https://www.linkedin.com/company/pienteger/"
                            target="_blank" rel="noreferrer"
                            className="text-blue-700">
                            LinkedIn
                        </a>
                        <a href="https://www.youtube.com/@pienteger"
                            target="_blank" rel="noreferrer"
                            className="text-red-600">
                            YouTube
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between my-2">

                    <p className="font-semibold">
                        © 2024 <span className="font-bold">Pienteger</span>. All rights reserved.</p>

                    <nav className="flex flex-col md:flex-row md:gap-1">
                        <a href="/career" className="font-semibold hover:underline">Career</a>
                        <Pipe />
                        <a href="/terms" className="font-semibold hover:underline">Terms of Use</a>
                        {/* <Pipe />
                        <a href="/sales" className="font-semibold hover:underline">Sales and Refunds</a> */}
                        <Pipe />
                        <a href="/legal" className="font-semibold hover:underline">Legal</a>
                        {/* <Pipe />
                        <a href="/sitemap" className="font-semibold hover:underline">Site Map</a> */}
                    </nav>
                </div>
            </div>
        </>
    );
}


export default Footer;