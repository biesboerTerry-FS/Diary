import CalendarImage from "./components/CalendarImage";
import TodayDate from "./components/TodayDate";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen font-sans">
      <main className="flex flex-col items-center w-full max-w-5xl gap-8 px-4 py-8 sm:px-6 sm:items-start">
        <CalendarImage />
        <div className="flex flex-col items-center w-full gap-6 text-center sm:items-start sm:text-left">
          <h1 className="w-full text-3xl font-semibold leading-10 tracking-tight text-orange-400 dark:text-zinc-50">
            diary of theLiftedGifted — <TodayDate />
          </h1>
          <p className="w-full max-w-3xl text-lg leading-8 text-orange-600 dark:text-orange-400">
            cruisin down the street in my 64, jockin the freaks, clocking the dough, went to the park to get the scoop, knuckleheads out there cold shooting some hoops, a car pulls up who can it be, a fresh El Camino rolled, Kilo G. and a fade to black, hittin switches, smokin sacks, and tricks up the sleeve
          </p>
        </div>

      </main>
    </div>
  );
}

