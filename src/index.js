<<<<<<< HEAD
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

app.use('/v1/user',userRoutes)

app.listen(port,()=>{
    console.log(`open: http://localhost:${port}`)
})

module.exports = app

=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> c0d5979b88234f36aac4004f7f25495ad70534c6
