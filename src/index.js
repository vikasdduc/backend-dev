// require("dotenv").config({
//     path: './env'
// });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});


connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    })
}).catch((err) => {
 console.log("mongo db connection error !!", err);
})

/*
import express from "express";

const app = express();

(async ()=>{

    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/
        ${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error connecting to DB")
            throw error
        
        })

        app.listen(process.env.PORT,() =>{
             console.log(`Listening on port ${process.env.PORT}`)
    })
    }
    catch(error){
        console.log(error)
        throw err
    }
})()
function connectDB(){}
*/