import { useSpells } from '@/api';
import { Macondo } from 'next/font/google';

const macondo = Macondo({ weight: '400', subsets: ['latin'] });

export default function Spells() {
    const { spells, isError, isLoading } = useSpells();

    if (isError) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!spells) return <div>Empty data</div>;

    return (
        <div className="flex flex-col gap-12 max-w-4xl">
            { spells.map((spell) => (
                <div key={spell.id}>
                    <h2 className={`text-4xl mb-4 mt-2 ${macondo.className}`}>{spell.name}</h2>
                    <span>{spell.description}</span>
                </div>
            ))}
        </div>
    )
}
