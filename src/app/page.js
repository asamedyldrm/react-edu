// import Image from 'next/image'
import React from "react"
import Profile from "./profile";
import ShoppingList from "./list";


function MyButton(){
  return (
    <button className="bg-slate-600 p-2">I'm a button!</button>
  );
}

export default function Home() {
  return (
    
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
      <Profile/>
      <ShoppingList/>

    </div>
  )
}
