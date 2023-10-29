import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import DotGroup from './DotGroup';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-red' : ''}
        hover:text-red transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink >
  );
};


const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 768px)');

  return (
    <nav className={'z-40 w-full fixed top-0 py-6'}>
      <div className={!isAboveMediumScreens ? 'flex items-center justify-between mx-auto w-5/6 py-5 px-4 bg-black text-white' : 'flex items-center justify-between mx-auto w-5/6 py-12 px-4 bg-black text-white'}>
        <h4 className="font-playfair text-3xl font-bold">LOGO</h4>

        {/* DESKTOP NAV */}
        {isAboveMediumScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-xl font-semibold capitalize">
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Dienstleistungen'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Über Uns'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Kontakt'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (<button
          className="rounded-full bg-black p-2"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img alt="menu-icon" src="../assets/menu-icon.svg" />
        </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-black w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white capitalize">
              <Link
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Dienstleistungen'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Über uns'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Kontakt'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;