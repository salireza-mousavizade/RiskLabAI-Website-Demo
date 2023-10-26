'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import {useEffect, useState} from "react";

const Header = () => {

    const [activeTab, setActiveTab] = useState('main');

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 125) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // <div className="sticky top-0 left-0 p-8 bg-transparent">
    //     <header
    //         style={{borderRadius: '1rem'}}
    //         className={`sticky he border-r-4 top-0 left-0 w-full z-10 flex items-center justify-between p-3 ${scrolled ? 'bg-gray-200 dark:bg-gray-700 border-yellow-400 shadow-neutral-400' : 'bg-transparent border-transparent'} transition duration-300 ease-in-out`}>
    //         <nav>

    // flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
    return (

        <header>
            <nav
                className={`fixed max-w-screen-md mx-auto px-10 py-6  flex-no-wrap top-0 left-0 right-0 z-10 flex-nowrap items-center justify-between`}>
                <div style={{borderRadius: '0.75rem'}}
                     className={`flex w-full border-r-4  flex-wrap items-center justify-between p-4 duration-700 ease-in-out ${scrolled ? 'bg-gray-400 dark:bg-gray-700 shadow-md border-yellow-500' : 'bg-transparent border-transparent'}`}>
                    <div>
                        <Link href="/" aria-label={siteMetadata.headerTitle}>
                            <div className="flex items-center justify-between">
                                <div className="mr-3">
                                    <img src={'/static/logo/logo-motion.gif'} width={75}/>
                                </div>
                                {typeof siteMetadata.headerTitle === 'string' ? (
                                    <div className="hidden h-6 text-2xl sm:block font-light">
                                        {/*{siteMetadata.headerTitle}*/}
                                        RiskLab
                                        <b className={'font-semibold'}>AI</b>

                                    </div>
                                ) : (
                                    <div>
                                        RiskLab
                                        <b className={'font-semibold'}>AI</b>
                                    </div>
                                    // siteMetadata.headerTitle
                                )}
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center leading-5 space-x-2 sm:space-x-4">
                        {headerNavLinks
                            .filter((link) => link.href !== '/')
                            .map((link) => (
                                <Link
                                    onClick={() => setActiveTab(link.title)}
                                    key={link.title}
                                    href={link.href}
                                    className="hidden sm:block hover:default:bg-gray-400 hover:dark:bg-gray-500 p-2 text-gray-900 dark:text-gray-100"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        <ThemeSwitch/>
                        <MobileNav/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
