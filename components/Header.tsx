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
        if (offset > 200 ) {
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

    return (
        <div className="sticky top-0 left-0 w-full p-8 bg-transparent">
            <header
                style={{borderRadius: '0.5rem'}}
                className={`border-r-4 sticky top-0 left-0 w-full z-10 flex items-center justify-between p-3 ${scrolled ? 'bg-gray-200 dark:bg-gray-700 border-yellow-400' : 'bg-transparent border-transparent'} transition duration-300 ease-in-out`}>
                <div>
                    <Link href="/" aria-label={siteMetadata.headerTitle}>
                        <div className="flex items-center justify-between mb-1">
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
                <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
                    {headerNavLinks
                        .filter((link) => link.href !== '/')
                        .map((link) => (
                            link.title === activeTab ?
                                <Link
                                    style={{
                                        color: 'initial', // default color
                                        '&:hover': {
                                            color: 'green', // change color to green on hover
                                        },
                                    }}
                                    onClick={() => setActiveTab(link.title)}
                                    key={link.title}
                                    href={link.href}
                                    className="hidden sm:block font-semibold text-gray-900 dark:text-gray-100"
                                >
                                    {link.title}
                                </Link> : <Link
                                    onClick={() => setActiveTab(link.title)}
                                    key={link.title}
                                    href={link.href}
                                    className="hidden sm:block font-light text-gray-900 dark:text-gray-100"
                                >
                                    {link.title}
                                </Link>
                        ))}
                    {/*<SearchButton />*/}
                    <ThemeSwitch/>
                    <MobileNav/>
                </div>
            </header>
        </div>
    )
}

export default Header
