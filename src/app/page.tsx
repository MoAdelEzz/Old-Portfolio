'use client'
import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import AboutPage from "./Components/Pages/about";
import EntryPage from "./Components/Pages/entry-animation";

export default function Home() {

  const [entryOk, setEntryOk] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntryOk(true);
    },1500);
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
          </>
      }
    </div>
  );
}
