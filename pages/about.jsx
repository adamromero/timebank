import React from "react";
import Image from "next/image";

const about = () => {
   return (
      <div>
         about
         <Image
            src="https://www.guideposts.org/sites/default/files/styles/bynder_webimage/public/story/teens_gardening.jpg"
            width={500}
            height={200}
            layout="responsive"
         />
      </div>
   );
};

export default about;
