import Link from "next/link";
import React from "react";

const register = () => {
   return (
      <div>
         <h1>Welcome to Time Bank</h1>
         <h2>Register</h2>
         <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={(e) => e.preventDefault()}
         >
            <label htmlFor="name">
               Name
               <input className="border-2" type="text" name="name" id="name" />
            </label>

            <label htmlFor="email">
               Email
               <input
                  className="border-2"
                  type="email"
                  name="email"
                  id="email"
               />
            </label>

            <label htmlFor="password">
               Password
               <input
                  className="border-2"
                  type="password"
                  name="password"
                  id="password"
               />
            </label>
            <label htmlFor="confirmPassword">
               Confirm Password
               <input
                  className="border-2"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
               />
            </label>
            <button className="bg-gray-400 max-w-[200px]" type="submit">
               Submit
            </button>
         </form>
         <Link href="/login">Login</Link>
      </div>
   );
};

export default register;
