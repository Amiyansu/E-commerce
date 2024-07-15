import mongoose from "mongoose";


export const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.g3i8jb9.mongodb.net/flipcart?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("DB connected successfully");
    } catch(error){
        console.log('error while connecting database',error.message);
    }
}
export default Connection;