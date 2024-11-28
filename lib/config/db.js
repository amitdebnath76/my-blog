// import mongoose from "mongoose";
// export const ConnectDB=async()=>{
//     // await mongoose.connect('mongodb+srv://debnath4455:AmitDebnath2017@cluster0.lt3km.mongodb.net/blog-app')
//    await mongoose.connect('mongodb+srv://debnath4455:AmitDebnath2017@cluster0.lt3km.mongodb.net/blog-app?retryWrites=true&w=majority&appName=Cluster0')
//     console.log('DB connected');

// }
import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("DB already connected");
      return;
    }
    await mongoose.connect('mongodb+srv://debnath4455:AmitDebnath2017@cluster0.lt3km.mongodb.net/blog-app?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error("Error connecting to DB:", error);
    throw new Error("DB connection failed");
  }
};
