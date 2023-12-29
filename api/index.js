import express from "express"

import userRoutes from "./user.routes";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

const app = express();
const port = 4000;

app.use(compression())
app.use(express.json())
app.use(helmet())
app.use(cors())

// app.use('/v1/user',userRoutes)
app.use('/api/v1/user',userRoutes)

app.listen(port,()=>{
    console.log(`open: http://localhost:${port}`)
})

