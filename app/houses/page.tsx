import NavCard from '@/components/NavCard';
import gryffindor from '@/public/gryffindor.jpg';
import hufflepuff from '@/public/hufflepuff.jpg';
import ravenclaw from '@/public/ravenclaw.jpg';
import slytherin from '@/public/slytherin.jpg';

export default function Houses() {
    return (
        <div className="grid grid-cols-4 gap-12">
            <div className="flex flex-col h-full">
                <NavCard
                    linkHref="/houses/gryffindor"
                    text="Gryffindor"
                    img={gryffindor}
                />
                <blockquote>
                    You might belong in Gryffindor,
                    <br />
                    Where dwell the brave at heart,
                    <br />
                    Their daring, nerve and chivalry
                    <br />
                    Set Gryffindors apart.
                </blockquote>
                <cite className="text-sm mt-2">
                    Harry Potter and the Philosopher’s Stone
                </cite>
            </div>
            <div className="flex flex-col h-full">
                <NavCard
                    linkHref="/houses/hufflepuff"
                    text="Hufflepuff"
                    img={hufflepuff}
                />
                <blockquote>
                    You might belong in Hufflepuff,
                    <br />
                    Where they are just and loyal,
                    <br />
                    Those patient Hufflepuffs are true
                    <br />
                    And unafraid of toil.
                </blockquote>
                <cite className="text-sm mt-2">
                    Harry Potter and the Philosopher’s Stone
                </cite>
            </div>
            <div className="flex flex-col h-full">
                <NavCard
                    linkHref="/houses/ravenclaw"
                    text="Ravenclaw"
                    img={ravenclaw}
                />
                <blockquote>
                    Or yet in wise old Ravenclaw,
                    <br />
                    If you’ve a ready mind,
                    <br />
                    Where those of wit and learning,
                    <br />
                    Will always find their kind.
                </blockquote>
                <cite className="text-sm mt-2">
                    Harry Potter and the Philosopher’s Stone
                </cite>
            </div>
            <div className="flex flex-col h-full">
                <NavCard
                    linkHref="/houses/slytherin"
                    text="Slytherin"
                    img={slytherin}
                />
                <blockquote>
                    Or perhaps in Slytherin
                    <br />
                    You’ll make your real friends,
                    <br />
                    Those cunning folk use any means
                    <br />
                    To achieve their ends.
                </blockquote>
                <cite className="text-sm mt-2">
                    Harry Potter and the Philosopher’s Stone
                </cite>
            </div>
        </div>
    )
}
