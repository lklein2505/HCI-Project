import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';

import LogoImg from '../../assets/logo.png';
import HeroImg from '../../assets/hero.png';

const Header = () => {
    return (
        <header className="h-4/6 relative flex justify-center items-center">
            <div className="z--1">
                <Image
                    src={HeroImg}
                    layout="fill"
                    objectFit="cover"
                    alt="Hero image"
                />
            </div>
            <main className="my-0 mx-auto flex flex-col min-w-sm max-w-6xl w-full">
                <section className="flex justify-between items-center">
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={150}
                        height={150}
                        alt="Design logo"
                    />
                    <nav className="inline-flex justify-between list-none w-max">
                        <li className="w-36 py-4 font-bold text-2xl text-center text-white bg-purple-900">
                            Home
                        </li>
                        <li className="w-36 py-4 font-normal text-2xl text-center text-purple-900 hover:text-white hover:bg-purple-900">
                            About Us
                        </li>
                        <li className="w-36 py-4 font-normal text-2xl text-center text-purple-900 hover:text-white hover:bg-purple-900">
                            Showcase
                        </li>
                        <li className="w-36 py-4 font-normal text-2xl text-center text-purple-900 hover:text-white hover:bg-purple-900">
                            Blog
                        </li>
                        <li className="w-36 py-4 font-normal text-2xl text-center text-purple-900 hover:text-white hover:bg-purple-900">
                            Contact
                        </li>
                        <li className="w-36 py-4 font-normal text-2xl text-center text-purple-900 hover:text-white hover:bg-purple-900">
                            Sign In
                        </li>
                    </nav>
                </section>
                <section className="mt-14">
                    <h1 className="h-20 m-0 mb-1 font-bold text-7xl text-purple-800">
                        Design Matters
                    </h1>
                    <h3 className="h-14 m-0 font-normal text-5xl text-purple-600">
                        Entrust us with your digital appearance
                    </h3>
                </section>
            </main>
        </header>
    );
};

export default Header;
