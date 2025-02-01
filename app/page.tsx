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

export default function Home(props:any) {
const [count, setCount] = useState(1);
const [text, setText] = useState("");
const [isShow, setIsShow] = useState(true);

const handleClick2 = useCallback((e:any) => {
if (count < 10) {
  // alert('クリック');
  // foo = foo + 1
    console.log(count);
    setCount((count) => count + 1);
  // setFoo(count => count + 1);
  // setFoo(foo => foo + 1);
};
}, [count]);
// const handleClick = useCallback((e) => {
//         e.preventDefault();
//         console.log(e.target.href);
//         e.preventDefault();
//         alert(foo);
//         foo = foo + 1
//       }, []);
useEffect(() => {
  console.log(`マウント時:${count}`)
  document.body.style.backgroundColor="lightblue";
  return () => {
    console.log("アンマウント時")
    document.body.style.backgroundColor="";
  };
}, []);
const handleChange = useCallback((e) => {
  if (e.target.value.length > 5) {
    alert("5文字以内にしてください");
    return;
  }
  setText(e.target.value.trim());
}, []);

const handleDisplay = useCallback(() => {
        setIsShow((isShow) => !isShow)
}, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {isShow ? <h1>{count}</h1> : null}
      <Header />
      <button onClick={handleClick2}>
      ボタン
      </button>
      <button onClick={handleDisplay}>
      {isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange}/>
      <Main page="index"/>
      <Footer/>
    </div>
  );
}
