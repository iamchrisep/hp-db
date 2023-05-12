import useSWR from 'swr';
import { ICharacter, ISpell } from '@/api/types';

export async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
}

export function useCharacters() {
    const { data, error, isLoading } = useSWR(`https://hp-api.onrender.com/api/characters`, fetcher);

    return {
        characters: data as Array<ICharacter>,
        isLoading,
        isError: error
    }
}

export function useCharacter(id: string) {
    const { data, error, isLoading } = useSWR(`https://hp-api.onrender.com/api/character/${id}`, fetcher);

    return {
        character: data as ICharacter,
        isLoading,
        isError: error
    }
}

export function useStudents() {
    const { data, error, isLoading } = useSWR(`https://hp-api.onrender.com/api/characters/students`, fetcher);

    return {
        students: data as Array<ICharacter>,
        isLoading,
        isError: error
    }
}

export function useStaff() {
    const { data, error, isLoading } = useSWR(`https://hp-api.onrender.com/api/characters/staff`, fetcher);

    return {
        staff: data as Array<ICharacter>,
        isLoading,
        isError: error
    }
}

export function useHouse(house: string) {
    const { data, error, isLoading } = useSWR(`https://hp-api.onrender.com/api/characters/house/${house}`, fetcher);

    return {
        houseCharacters: data as Array<ICharacter>,
        isLoading,
        isError: error
    }
}

export function useSpells() {
    const { data, error, isLoading } = useSWR(`https://hp-api.onrender.com/api/spells`, fetcher);

    return {
        spells: data as Array<ISpell>,
        isLoading,
        isError: error
    }
}
