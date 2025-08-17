import { AboutMe } from "../components/AboutMe.jsx";
import { Bar } from "../components/Bar.jsx";
import { useState } from "react";

export function Main() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className="h-dvh flex flex-col items-center justify-center dark:bg-foreground dark:text-background bg-background text-foreground">
      <main className="max-w-[600px] w-[90%] space-y-4">
        <Bar darkmode={darkmode} setDarkmode={setDarkmode} />
        <AboutMe />
      </main>
    </div>
  );
}
