'use client'
import { useEffect, useState } from "react";
import Navbar from "./Components/Elements/navbar";
import AboutPage from "./Components/Pages/about";
import EntryPage from "./Components/Pages/entry-animation";
import Projects from "./Components/Pages/projects";

export default function Home() {

  const [entryOk, setEntryOk] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntryOk(true);
    },1300);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="scroll-smooth bg-black">
      {!entryOk && <EntryPage /> }

      {
         entryOk &&
          <> 
            <Navbar></Navbar>
            <AboutPage></AboutPage>
            <Projects></Projects>
          </>
      }
    </div>
  );
}
