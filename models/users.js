import { Schema, model, models } from "mongoose";
import Post from "./posts";

const userSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   phoneNumber: {
      type: String,
   },
   address: {
      type: String,
      required: true,
   },
   city: {
      type: String,
      required: true,
   },
   state: {
      type: String,
      required: true,
   },
   zipCode: {
      type: String,
      required: true,
   },
   country: {
      type: String,
      required: true,
   },
   creditBalance: {
      type: Number,
      default: 0,
   },
   isAdmin: {
      type: Boolean,
      default: false,
   },
   posts: [
      {
         type: Schema.Types.ObjectId,
         ref: Post,
      },
   ],
});

const User = models.User || model("User", userSchema);

export default User;
