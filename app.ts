import express from 'express';
import userRoute from "./routes/userRoute"
import mongoose from 'mongoose';


const app = express();
const port = 3000;
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//users
app.use("/api/users", userRoute);


mongoose.connect("mongodb+srv://khoidev311:8heCdSJRCFliwvfk@server1.a2yvgjo.mongodb.net/").then(()=> {
  console.log("Connected to database!");
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
}).catch((err)=> {
  console.log(err.stack);
})