import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
   if (isConnected) {
      console.log("Already connected to DB");
      return;
   }

   try {
      mongoose.connect(process.env.MONGODB_URI, {
         dbName: "share_prompt",
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      isConnected = true;
      console.log("MongoDb Connected !");
   } catch (error) {
      console.log(error);
   }
};
