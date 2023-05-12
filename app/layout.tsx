import React from 'react';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { Convergence } from 'next/font/google';
import MouseContextProvider from '@/context/mouseContext';
import Cursor from '@/components/Cursor';
import logo from '@/public/logo.png';
import stardust from '@/public/stardust.png';

const convergence = Convergence({ weight: '400', subsets: ['latin'] });

export const metadata = {
    title: 'Harry Potter Database',
    description: 'Harry Potter characters and spells database',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <MouseContextProvider>
            <html lang="en">
                <body
                    className={`p-24 min-h-screen ${convergence.className}`}
                    style={{
                        backgroundImage: `url(${stardust.src})`,
                    }}
                >
                    <header className="flex flex-col items-center mb-16">
                        <Link
                            href="/"
                            className="flex flex-col items-center"
                        >
                            <Image
                                src={logo}
                                alt="Harry Potter"
                            />
                            <h3 className="text-xl mt-8">The Unofficial Database of Harry Potter Characters and Spells</h3>
                        </Link>
                    </header>
                    <main className="flex flex-col items-center">
                        {children}
                    </main>
                    <footer className="flex justify-center mt-16 gap-8">
                        <div className="flex gap-x-2">
                            <span>API by</span>
                            <a
                                href="https://hp-api.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold"
                            >
                                Kostas
                            </a>
                        </div>
                        <div className="flex gap-x-2">
                            <span>Illustrations by</span>
                            <a
                                href="https://apolar.artstation.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold"
                            >
                                Arch Apolar
                            </a>
                        </div>
                    </footer>
                    <Cursor />
                </body>
            </html>
        </MouseContextProvider>
    )
};
