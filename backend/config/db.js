import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://rk5902614:HM3XW1HPZdRe8TTT@cluster0.lr0sm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
