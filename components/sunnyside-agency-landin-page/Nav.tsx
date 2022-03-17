import Image from 'next/image';
import { useState } from 'react';

import logoImg from 'public/images/sunnyside-agency-landing-page/logo.svg';
import menuImg from 'public/images/sunnyside-agency-landing-page/icon-hamburger.svg';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuClass = openMenu ? '' : 'md:hidden';

  return (
    <nav className="flex items-center justify-between px-8 py-6 md:relative">
      <div className="w-32">
        <Image src={logoImg} alt="logo" layout="responsive" />
      </div>

      <button className="hidden w-6 md:block" onClick={() => setOpenMenu(!openMenu)}>
        <Image src={menuImg} alt="menu" layout="responsive" />
      </button>

      <div
        className={`${menuClass} menu-content flex items-center gap-10 font-bold tracking-wider text-white md:absolute md:top-full md:left-8 md:right-8 md:z-10 md:mt-4 md:flex-col md:bg-white md:pt-16 md:pb-8 md:text-gray-500`}
      >
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a
          href="#"
          className="rounded-3xl bg-white px-6 py-3 text-center font-fraunces uppercase text-black transition hover:bg-white/25 hover:text-white md:bg-yellow-300"
        >
          Contact
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          .menu-content {
            clip-path: polygon(0 2rem, 0 100%, 100% 100%, 100% 0, 92.5% 2rem);
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
