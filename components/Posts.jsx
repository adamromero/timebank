import React from "react";
import Link from "next/link";

const Posts = () => {
   return (
      <div>
         <h2 className="text-xl font-bold">Posts</h2>
         <h3>Filtering</h3>
         <div className="flex">
            <select name="" id="">
               <option value="">Select a category</option>
               <option value="">Video editing</option>
               <option value="">Cooking</option>
               <option value="">Gardening</option>
            </select>
            <select name="" id="">
               <option value="">Select a distance</option>
               <option value="">5 miles</option>
               <option value="">10 miles</option>
               <option value="">35 miles</option>
               <option value="">50 miles</option>
            </select>
         </div>
         <Link href={`/posts/1`}>
            <a className="block bg-gray-400 max-w-sm mb-2">
               <h3>Need help with video editing</h3>
               <p>Need video edited for my youtube channel</p>
               <p>Posted By: Ted Smith</p>
               <p>Posted On: 10/10/2020 10:00am</p>
               <p>Location: New York, NY</p>
               <p>Category: Video editing</p>
            </a>
         </Link>

         <Link href={`/posts/2`}>
            <a className="block bg-gray-400 max-w-sm mb-2">
               <h3>Need baker for a small wedding</h3>
               <p>Need a wedding cake</p>
               <p>Posted By: Lee Hart</p>
               <p>Posted On: 10/10/2020 10:00am</p>
               <p>Location: New York, NY</p>
               <p>Category: Cooking</p>
            </a>
         </Link>
      </div>
   );
};

export default Posts;
