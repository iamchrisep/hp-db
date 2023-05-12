'use client';

import { useHouse } from '@/api';
import Character from '@/components/Character';

export default function Gryffindor() {
    const { houseCharacters, isError, isLoading } = useHouse('gryffindor');

    if (isError) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!houseCharacters) return <div>Empty data</div>;

    return (
        <div className="grid grid-cols-3 gap-12 divide-x divide-stone-700 [&>*:nth-child(3n+1)]:border-none">
            { houseCharacters.map((character) => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    )
}
