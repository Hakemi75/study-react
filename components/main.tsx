'use client';
import Image from "next/image";
import { Links } from "../components/links";
import { Headline } from "../components/headline";
import { useEffect } from "react";

export function Main(props) {
const handleClick = () => {
  alert('クリック');
}
// useEffect(() => {
//   console.log("マウント時")
//   document.body.style.backgroundColor="lightblue";
//   return () => {
//     console.log("アンマウント時")
//     document.body.style.backgroundColor="";
//   };
// }, []);
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Headline title="Hell yeah" number={1234} array={[1,2,3]} code={<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                app/{props.page}.tsx thank you
            </code>}
            push={<button onClick={handleClick}>クリック</button>}
          />
        <Links />
      </main>
  );
}
