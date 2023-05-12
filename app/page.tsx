import NavCard from '@/components/NavCard';
import characters from '@/public/characters.jpg';
import students from '@/public/students.jpg';
import staff from '@/public/staff.jpg';
import houses from '@/public/houses.jpg';
import spells from '@/public/spells.jpg';

export default function Home() {
    return (
        <div className="grid grid-cols-4 gap-12 place-items-center">
            <NavCard
                linkHref="/characters"
                text="All characters"
                img={characters}
                linkClass="col-span-full"
            />
            <NavCard
                linkHref="/students"
                text="Students"
                img={students}
            />
            <NavCard
                linkHref="/staff"
                text="Staff"
                img={staff}
            />
            <NavCard
                linkHref="/houses"
                text="Houses"
                img={houses}
            />
            <NavCard
                linkHref="/spells"
                text="Spells"
                img={spells}
            />
        </div>
    )
}
