import React from "react";
import Link from "next/link";

const Header = () => {
   return (
      <header className="flex justify-between border-b-2 border-black">
         <Link href="/">
            <h1 className="text-3xl font-bold cursor-pointer">Time Bank</h1>
         </Link>
         <div className="flex">
            <Link href="/profile">
               <a className="flex">
                  <div>Image</div>
                  <div>Adam Romero</div>
               </a>
            </Link>

            <div>Time credits</div>
            <div>Logout</div>
         </div>
      </header>
   );
};

export default Header;
