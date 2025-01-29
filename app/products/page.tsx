import Image from "next/image";
import {Footer} from "../../components/footer"
import {Links} from "../../components/links"
import {Headline} from "../../components/headline"
import {Header} from "../../components/header"

export default function Home(props) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Header />
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
                products/page.tsx thank you
        </code>}/>
      <Links />
      </main>
      <Footer />
    </div>
  );
}
