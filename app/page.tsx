'use client'
import { Footer } from "../components/footer"
import { Main } from "../components/main"
import { Header } from "../components/header"
import { useCallback, useEffect, useState } from "react";




// function handleClick2 (e, foo) {
//         // e.preventDefault();
//         console.log(e.target.href);
//         e.preventDefault();
//         alert(foo);
//       }

export default function Home(props) {
const [count, setFoo] = useState(10);

const handleClick2 = () => {
  // alert('クリック');
  // foo = foo + 1
  // console.log(foo);
  setFoo(count => count + 1);
  setFoo(count => count + 1);
  // setFoo(foo => foo + 1);
};
// const handleClick = useCallback((e) => {
//         // e.preventDefault();
//         // console.log(e.target.href);
//         // e.preventDefault();
//         // alert(foo);
//         // foo = foo + 1
//       }, []);
useEffect(() => {
  console.log("マウント時")
  document.body.style.backgroundColor="lightblue";
  return () => {
    console.log("アンマウント時")
    document.body.style.backgroundColor="";
  };
}, []);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{count}</h1>
      <Header />
      <button href="/products" onClick={handleClick2}>
      ボタン
      </button>
      <Main page="index"/>
      <Footer/>
    </div>
  );
}
