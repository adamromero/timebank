import connectMongo from "../utils/connectMongo";
import User from "../models/users";
import Link from "next/link";
import Posts from "../components/Posts";

const Home = ({ users }) => {
   console.log(users);

   return (
      <>
         <h1 className="text-3xl font-bold">Welcome to Time Bank</h1>
         <div>
            <h2 className="text-xl font-bold">Dashboard</h2>
            <div>Time credits: 250</div>
            <div>Transactions: 6</div>
         </div>
         <Posts />

         {/* <h2>users</h2>
         {users.map((user) => (
            <div key={user._id}>
               <h2>{user.name}</h2>
               <p>{user.email}</p>
               <p>{user.address}</p>
               <p>{user.creditBalance}</p>
            </div>
         ))} */}
      </>
   );
};

export const getServerSideProps = async () => {
   try {
      await connectMongo();
      const users = await User.find();

      return {
         props: {
            users: JSON.parse(JSON.stringify(users)),
         },
      };
   } catch (error) {
      console.log(error);
      return {
         notFound: true,
      };
   }
};

export default Home;
