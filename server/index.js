import express from "express";
const app = express()
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser"

//middlewares
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"
}));

app.use(cookieParser());



app.use("/server/auth",authRoutes)
app.use("/server/users",userRoutes)
app.use("/server/posts",postRoutes)
app.use("/server/likes",likeRoutes)
app.use("/server/comments",commentRoutes)


app.listen(8800,()=>{
    console.log("API Working!")
})
