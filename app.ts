import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from "./routes/userRoute";
import authRouter from "./routes/authRoute";
import roleRouter from "./routes/roleRoute";
import teamRouter from "./routes/teamRoute";
import leagueRouter from "./routes/leagueRoute";
import scoreRouter from "./routes/scoreRoute";
// import { authToken } from './middleware/authToken';

dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//auth
app.use("/api/auth", authRouter);

//users
app.use("/api/users",userRouter);

//roles
app.use("/api/roles",roleRouter);

//teams
app.use("/api/teams",teamRouter);

//leagues
app.use("/api/leagues",leagueRouter);

//scores
app.use("/api/scores",scoreRouter);



mongoose.connect("mongodb+srv://khoidev311:8heCdSJRCFliwvfk@server1.a2yvgjo.mongodb.net/").then(()=> {
  console.log("Connected to database!");
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
}).catch((err)=> {
  console.log(err.stack);
})