import express from "express"
import bodyParser from "body-parser";
import morgan from "morgan"
import dotEnv from "dotenv"
dotEnv.config()


const app = express()


import connectDB from "./config/DB.js";
import productRouter from "./router/product.js"


connectDB()


// middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use("/product", productRouter)








const port = process.env.PORT || 7070



app.listen(port, console.log(`server connected at ${port}`))