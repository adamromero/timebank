import connectMongo from "../../utils/connectMongo";
import User from "../../models/users";

export default async function getUsers(req, res) {
   try {
      console.log("CONNECTING TO MONGO");
      await connectMongo();
      console.log("CONNECTED TO MONGO");

      console.log("CREATING DOCUMENT");
      const users = await User.find();
      console.log("CREATED DOCUMENT");

      res.json(users);
   } catch (error) {
      console.log(error);
      res.json({ error });
   }
}
