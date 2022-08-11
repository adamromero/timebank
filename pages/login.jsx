import React from "react";
import Link from "next/link";

const login = () => {
   return (
      <div>
         <h2>Login</h2>
         <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={(e) => e.preventDefault()}
         >
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
            <button className="bg-gray-400 max-w-[200px]" type="submit">
               Submit
            </button>
         </form>
         <Link href="/register">Register</Link>
      </div>
   );
};

export default login;
