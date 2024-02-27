import express from "express";

import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";

//middlewares

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser)

app.use("/server/auth",authRoutes)
app.use("/server/users",userRoutes)
app.use("/server/posts",postRoutes)
app.use("/server/likes",likeRoutes)
app.use("/server/comments",commentRoutes)


app.listen(8800,()=>{
    console.log("API Working!")
})
