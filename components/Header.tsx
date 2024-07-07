import logo from '../assets/logo192.png';
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <div className='flex items-center py-5 px-5 md:px-10'>
                <a className='flex items-center gap-2 flex-1' href='/'>
                    <Image src={logo} alt="Pienteger Logo"
                        className='h-6 w-6' />
                    <h1 className='text-xl font-bold font-inter'>Pienteger&reg;</h1>
                </a>

                <div className='flex-init'>
                    <nav className='flex gap-2 justify-end'>
                        <a href='/about' className='font-bold hover:underline'>About</a>
                        <a href='https://blog.pienteger.com'
                            target='_blank' rel='noreferrer'
                            className='font-bold hover:underline'>Blog</a>
                        <a href='/contact' className='font-bold hover:underline'>Contact</a>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;
