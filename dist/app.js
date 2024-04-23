"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const demo_routes_1 = __importDefault(require("./models/demo/demo.routes"));
const mongodbConnector_1 = require("./database/mongodbConnector");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//users
app.use("/api/users", userRoute_1.default);
//demo
app.use("/api/users", demo_routes_1.default);
// Kết nối đến MongoDB và khởi động server
(0, mongodbConnector_1.connectToMongoDB)()
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
//# sourceMappingURL=app.js.map