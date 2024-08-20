import Image from 'next/image';
import Link from 'next/link';
import { hamburger } from '@/public/icons';
import { headerLogo } from '@/public/images';
import { navLinks } from '@/constants/';

const Nav = () => {
  return (
    <header className='absolute padding-x py-8 w-full z-10'>
      <nav className='flex items-center justify-between max-container'>
        <Link href='/'>
          <Image
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </Link>

        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className='leading-normal text-lg text-slate-500'>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className='flex font-medium leading-normal max-lg:hidden wide:mr-24'>
          <a href='/'>Sign In</a>
          <span></span>
          <a href='/'>Explore now</a>
        </div>

        <div className='hidden max-lg:block'>
          <Image src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav