import mongoose from "mongoose";
export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://debnath4455:AmitDebnath2017@cluster0.lt3km.mongodb.net/blog-app')
    console.log();
}