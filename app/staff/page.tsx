'use client';

import { useStaff } from '@/api';
import Character from '@/components/Character';

export default function Staff() {
    const { staff, isError, isLoading } = useStaff();

    if (isError) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!staff) return <div>Empty data</div>;

    return (
        <div className="grid grid-cols-3 gap-12 divide-x divide-stone-700 [&>*:nth-child(3n+1)]:border-none">
            { staff.map((character) => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    )
}
