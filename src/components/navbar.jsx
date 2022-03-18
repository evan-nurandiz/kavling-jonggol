import React,{useState} from 'react';
import classNames from 'classnames'

const Navbar = () => {
    const [section,setSection] = useState('#')
    const [openMenu,setOpenMenu] = useState(false)
    

    return (
        <nav className="fixed z-50 w-full bg-black/[.8] border-gray-200 px-2 sm:px-4 py-6 dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex items-center">
                    {/* <img src="" className="mr-3 h-6 sm:h-10" /> */}
                    <span className="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-white">Kavling Jonggol Indah</span>
                </a>
                <button onClick={() => setOpenMenu(!openMenu)} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" onClick={() => setSection('#')} className={classNames('block py-2 pr-4 pl-3 border-b border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
                                section === '#' ? 'text-green-500' : 'text-white'
                            )} aria-current="page">Beranda</a>
                        </li>
                        <li>
                            <a href="#keunggulan" onClick={() => setSection('keunggulan')} className={classNames('block py-2 pr-4 pl-3 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
                                section === 'keunggulan' ? 'text-green-500' : 'text-white'
                            )}>Keunggulan</a>
                        </li>
                        <li>
                            <a href="#Lingkungan" onClick={() => setSection('Lingkungan')} className={classNames('block py-2 pr-4 pl-3 border-b border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
                                section === 'Lingkungan' ? 'text-green-500' : 'text-white'
                            )}>Lingkungan</a>
                        </li>
                        <li>
                            <a href="#Siteplan" onClick={() => setSection('Siteplan')} className={classNames('block py-2 pr-4 pl-3 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
                                section === 'Siteplan' ? 'text-green-500' : 'text-white'
                            )}>Site Plan</a>
                        </li>
                        <li>
                            <a href="#Harga" onClick={() => setSection('Harga')} className={classNames('block py-2 pr-4 pl-3 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
                                section === 'Harga' ? 'text-green-500' : 'text-white'
                            )}>Harga</a>
                        </li>
                        <li>
                            <a href="#Galeri" onClick={() => setSection('Galeri')} className={classNames('block py-2 pr-4 pl-3 border-b border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
                                section === 'Galeri' ? 'text-green-500' : 'text-white'
                            )}>Galery</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classNames('z-50 mt-[16px] space-y-[12px] text-left w-full md:hidden lg:hidden',
                openMenu ? 'block' : 'hidden'
            )}>
                <div>
                    <a href="#" onClick={() => {
                        setSection('#')
                        setOpenMenu(!openMenu)
                    }} className={classNames('text-lg text-left font-normal',
                         section === '#' ? 'text-green-500' : 'text-white'
                    )}>
                        Beranda
                    </a>
                </div>
                <div>
                    <a href="#keunggulan" onClick={() => {
                        setSection('keunggulan')
                        setOpenMenu(!openMenu)
                    }} className={classNames('text-lg text-left font-normal',
                         section === 'keunggulan' ? 'text-green-500' : 'text-white'
                    )}>
                        Keunggulan
                    </a>
                </div>
                <div>
                    <a href="#Lingkungan" onClick={() => {
                        setSection('Lingkungan')
                        setOpenMenu(!openMenu)
                    }} className={classNames('text-lg text-left font-normal',
                         section === 'Lingkungan' ? 'text-green-500' : 'text-white'
                    )}>
                        Lingkungan
                    </a>
                </div>
                <div>
                    <a href="#Siteplan" onClick={() => {
                        setSection('Siteplan')
                        setOpenMenu(!openMenu)
                    }} className={classNames('text-lg text-left font-normal',
                         section === 'Siteplan' ? 'text-green-500' : 'text-white'
                    )}>
                        Site Plan
                    </a>
                </div>
                <div>
                    <a href="#Harga" onClick={() => {
                        setSection('Harga')
                        setOpenMenu(!openMenu)
                    }} className={classNames('text-lg text-left font-normal',
                         section === 'Harga' ? 'text-green-500' : 'text-white'
                    )}>
                        Harga
                    </a>
                </div>
                <div>
                    <a href="#Galeri" onClick={() => {
                        setSection('Galeri')
                        setOpenMenu(!openMenu)
                    }} className={classNames('text-lg text-left font-normal',
                         section === 'Galeri' ? 'text-green-500' : 'text-white'
                    )}>
                        Galeri
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;