import CalendarImage from "./components/CalendarImage";
import TodayDate from "./components/TodayDate";
import Image from "next/image";
import { getImagePath } from "./lib/imagePath";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen font-sans">
      <main className="flex flex-col items-center w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:items-start">
        <CalendarImage />
        <div className="flex flex-col items-center w-full gap-6 text-center sm:items-start sm:text-left">
          <h1 className="w-full text-3xl font-semibold leading-10 tracking-tight text-orange-400 dark:text-zinc-50">
            diary of thatDevTerry — <TodayDate />
          </h1>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Image
              src={getImagePath("terry.jpeg")}
              alt="Terry Biesboer"
              width={120}
              height={120}
              className="object-cover rounded-full border-2 border-orange-400/50 dark:border-orange-300/50"
            />
            <div className="space-y-4">
              <p className="text-lg leading-8 text-orange-700 dark:text-orange-400">
                Hi, I&apos;m <strong>Terry Biesboer</strong> — a passionate full-stack developer based in{" "}
                <span className="font-medium">San Diego, CA</span>.
              </p>
              <p className="text-orange-700 dark:text-orange-400">
                I&apos;m currently completing my Bachelor&apos;s in Computer Science for Web Design & Development at{" "}
                <span className="font-medium">Full Sail University</span> and actively seeking opportunities in web development
                and related fields.
              </p>
              <p className="text-orange-700 dark:text-orange-400">
                This site is part diary, part portfolio: a place where I document what I&apos;m learning,
                share projects I&apos;ve built, and reflect on the craft of building for the web.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm sm:justify-start">
                <a
                  href="/about"
                  className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400"
                >
                  About me →
                </a>
                <a
                  href="/projects"
                  className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400"
                >
                  View projects →
                </a>
                <a
                  href="/contact"
                  className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400"
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
