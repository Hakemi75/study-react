import Image from "next/image";
import { Footer } from "../components/footer"
import { Links } from "../components/links"
import { Headline } from "../components/headline"


export default function Home(props) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Headline title="Hell yeah" page="No way!"/>
        <Links />
      </main>
      <Footer/>
    </div>
  );
}
