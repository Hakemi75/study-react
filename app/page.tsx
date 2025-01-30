'use client'
import { Footer } from "../components/footer"
import { Main } from "../components/main"
import { Header } from "../components/header"
import { useCallback } from "react";



// function handleClick2 (e, foo) {
//         // e.preventDefault();
//         console.log(e.target.href);
//         e.preventDefault();
//         alert(foo);
//       }

export default function Home(props) {
const handleClick = () => {
  alert('クリック');
};
const foo = 1;
const handleClick2 = useCallback((e) => {
        // e.preventDefault();
        console.log(e.target.href);
        e.preventDefault();
        alert(foo);
      }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <a href="/products" onClick={handleClick2}>
      ボタン
      </a>
      <Main page="index"/>
      <Footer/>
    </div>
  );
}
