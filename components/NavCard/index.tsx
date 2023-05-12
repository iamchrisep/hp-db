import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Macondo } from 'next/font/google';

interface IProps {
    linkHref: string,
    text: string,
    img: StaticImageData,
    linkClass?: string,
}

const macondo = Macondo({ weight: '400', subsets: ['latin'] });

const NavCard: React.FC<IProps> = ({
    linkHref,
    text,
    img,
    linkClass,
}) => {
    return (
        <Link
            href={linkHref}
            className={`flex flex-col h-full max-w-xs overflow-hidden relative group ${linkClass && linkClass}`}
        >
            <Image
                src={img}
                alt={text}
                className="polygon relative top-0 group-hover:scale-125 transition-all duration-500"
            />
            <div className="m-4 absolute border border-stone-500 top-0 bottom-0 left-0 right-0" />
            <h2 className={`flex relative text-4xl mb-8 px-8 -top-8 group-hover:-translate-y-2 transition-all ${macondo.className}`}>
                {text}
            </h2>
        </Link>
    )
}

export default NavCard;
