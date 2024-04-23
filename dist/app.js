"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//users
app.use("/api/users", userRoute_1.default);
mongoose_1.default.connect("mongodb+srv://khoidev311:8heCdSJRCFliwvfk@server1.a2yvgjo.mongodb.net/").then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(err.stack);
});
//# sourceMappingURL=app.js.map