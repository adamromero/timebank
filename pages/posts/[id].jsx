import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Post = () => {
   const router = useRouter();
   const { id } = router.query;

   return (
      <div>
         <Link href="/">Go back</Link>
         <div>hello {id}</div>
         <form className="flex flex-col max-w-sm">
            <textarea
               className="border-2 border-black"
               name=""
               id=""
               cols="30"
               rows="10"
               placeholder="write a message"
            ></textarea>
            <button className="bg-black text-white">Send</button>
         </form>
      </div>
   );
};

export default Post;
