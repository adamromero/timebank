import React from "react";
import Link from "next/link";

const Navigation = () => {
   return (
      <nav className="flex flex-col flex-1 max-w-[200px] bg-gray-400">
         <ul>
            <li>
               <Link href="/">Dashboard</Link>
            </li>
            <li>
               <Link href="/ledger">Ledger</Link>
            </li>
            <li>Sales</li>
            <li>Purchases</li>
            <li>
               <Link href="/profile">Profile</Link>
            </li>
            <li>
               <Link href="/about">About</Link>
            </li>
            <li>Logout</li>
         </ul>
      </nav>
   );
};

export default Navigation;
