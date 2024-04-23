import express from 'express';
import userRoute from "./routes/userRoute"
import demo from "./models/demo/demo.routes"
import { connectToMongoDB } from "./database/mongodbConnector";

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//users
app.use("/api/users", userRoute);
//demo
app.use("/api/users", demo);

// Kết nối đến MongoDB và khởi động server
connectToMongoDB()
  .then((db) => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Express is listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1); // Kết thúc ứng dụng nếu không thể kết nối đến MongoDB
  });