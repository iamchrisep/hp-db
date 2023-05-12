import React from 'react';
import Image from 'next/image';
import { Macondo } from 'next/font/google';
import { ICharacter } from '@/api/types';
import check from '@/public/check.svg';
import xmark from '@/public/xmark.svg';
import mars from '@/public/mars.svg';
import venus from '@/public/venus.svg';
import gryffindor from '@/public/gryffindor.png';
import hufflepuff from '@/public/hufflepuff.png';
import ravenclaw from '@/public/ravenclaw.png';
import slytherin from '@/public/slytherin.png';

interface IProps {
    character: ICharacter;
}

const macondo = Macondo({ weight: '400', subsets: ['latin'] });

const Character: React.FC<IProps> = ({
    character
}) => {
    return (
        <div
            className="flex flex-col items-center p-8"
        >
            { character.image
                ? (
                    <div className="relative flex items-center flex-col w-60">
                        <Image
                            src={character.image}
                            width={240}
                            height={100}
                            alt={character.name}
                            className="polygon"
                        />
                        <div className="m-4 absolute border border-stone-500 top-0 bottom-0 left-0 right-0" />
                        <h2 className={`flex relative text-4xl mb-8 px-8 -top-8 ${macondo.className}`}>{character.name}</h2>
                    </div>
                )
                : (
                    <h2 className={`text-4xl mb-4 mt-2 ${macondo.className}`}>{character.name}</h2>
                )
            }
            <table className="text-md">
                <tbody>
                <tr>
                    <td className="p-4 font-bold">
                        Alternate Names
                    </td>
                    <td className="p-4">
                        { character.alternate_names
                        && character.alternate_names.length > 0
                            ? character.alternate_names.map((name) => (
                                <div key={name}>{name}</div>
                            ))
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Species
                    </td>
                    <td className="p-4">
                        { character.species
                            ? (
                                <div>{character.species}</div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Gender
                    </td>
                    <td className="p-4">
                        { character.gender
                            ? (
                                <div className="flex gap-4 items-center">
                                    {(() => {
                                        switch (character.gender) {
                                            case "male":
                                                return (
                                                    <Image
                                                        src={mars}
                                                        alt="Male"
                                                        width={16}
                                                    />
                                                )
                                            case "female":
                                                return (
                                                    <Image
                                                        src={venus}
                                                        alt="Female"
                                                        width={16}
                                                    />
                                                )
                                            default:
                                                return null
                                        }
                                    })()}
                                    <div>{character.gender}</div>
                                </div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        House
                    </td>
                    <td className="p-4">
                        { character.house
                            ? (
                                <div className="flex gap-4 items-center">
                                    {(() => {
                                        switch (character.house) {
                                            case "Gryffindor":
                                                return (
                                                    <Image
                                                        src={gryffindor}
                                                        alt="Gryffindor"
                                                        width={32}
                                                    />
                                                )
                                            case "Hufflepuff":
                                                return (
                                                    <Image
                                                        src={hufflepuff}
                                                        alt="Hufflepuff"
                                                        width={32}
                                                    />
                                                )
                                            case "Ravenclaw":
                                                return (
                                                    <Image
                                                        src={ravenclaw}
                                                        alt="Ravenclaw"
                                                        width={32}
                                                    />
                                                )
                                            case "Slytherin":
                                                return (
                                                    <Image
                                                        src={slytherin}
                                                        alt="Slytherin"
                                                        width={32}
                                                    />
                                                )
                                            default:
                                                return null
                                        }
                                    })()}
                                    <div>{character.house}</div>
                                </div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Date of Birth
                    </td>
                    <td className="p-4">
                        { character.dateOfBirth
                            ? (
                                <div>{character.dateOfBirth}</div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Year of Birth
                    </td>
                    <td className="p-4">
                        { character.yearOfBirth
                            ? (
                                <div>{character.yearOfBirth}</div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Wizard
                    </td>
                    <td className="p-4">
                        { character.wizard
                            ? (
                                <Image
                                    src={check}
                                    alt="yes"
                                    width={16}
                                />
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Ancestry
                    </td>
                    <td className="p-4">
                        { character.ancestry
                            ? (
                                <div>{character.ancestry}</div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Eye Colour
                    </td>
                    <td className="p-4">
                        { character.eyeColour
                            ? (
                                <div>{character.eyeColour}</div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Hair Colour
                    </td>
                    <td className="p-4">
                        { character.hairColour
                            ? (
                                <div>{character.hairColour}</div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Wand
                    </td>
                    <td className="p-4">
                        { character.wand.wood && (
                            <div>{character.wand.wood}</div>
                        )}
                        { character.wand.core && (
                            <div>{character.wand.core}</div>
                        )}
                        { character.wand.length && (
                            <div>{character.wand.length} inches</div>
                        )}
                        {!character.wand.wood && !character.wand.core && !character.wand.length && (
                            <Image
                                src={xmark}
                                alt="no"
                                width={16}
                            />
                        )}
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Patronus
                    </td>
                    <td className="p-4">
                        { character.patronus
                            ? (
                                <div>{character.patronus}</div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Hogwarts Student
                    </td>
                    <td className="p-4">
                        { character.hogwartsStudent
                            ? (
                                <Image
                                    src={check}
                                    alt="yes"
                                    width={16}
                                />
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Hogwarts Staff
                    </td>
                    <td className="p-4">
                        { character.hogwartsStaff
                            ? (
                                <Image
                                    src={check}
                                    alt="yes"
                                    width={16}
                                />
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Actor
                    </td>
                    <td className="p-4">
                        { character.actor
                            ? (
                                <div>{character.actor}</div>
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Alternate Actors
                    </td>
                    <td className="p-4">
                        { character.alternate_actors
                        && character.alternate_actors.length > 0
                            ? character.alternate_actors.map((name) => (
                                <div key={name}>{name}</div>
                            ))
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                <tr>
                    <td className="p-4 font-bold">
                        Alive
                    </td>
                    <td className="p-4">
                        { character.alive
                            ? (
                                <Image
                                    src={check}
                                    alt="yes"
                                    width={16}
                                />
                            )
                            : (
                                <Image
                                    src={xmark}
                                    alt="no"
                                    width={16}
                                />
                            )
                        }
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Character;
