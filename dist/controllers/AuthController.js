"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogin = exports.authRegister = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../models/userModel"));
const authRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    const checkUsername = yield userModel_1.default.findOne({ username });
    if (checkUsername) {
        return res.status(422).json({ msg: 'Username is exist' });
    }
    else {
        try {
            const hassedPasword = yield bcrypt_1.default.hash(req.body.password, 10);
            const users = yield userModel_1.default.insertMany(Object.assign(Object.assign({}, req.body), { password: hassedPasword }));
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.authRegister = authRegister;
const authLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Check for existing user
    const user = yield userModel_1.default.findOne({ username }).select("+password");
    if (!user) {
        return res.status(400).json({ msg: 'User does not exist' });
    }
    // Validate password
    const isAcceptPassword = bcrypt_1.default.compare(password, user.password);
    if (isAcceptPassword) {
        const accessToken = jsonwebtoken_1.default.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1000s",
        });
        return res.status(200).json({
            access_token: accessToken,
            refresh_token: accessToken,
        });
    }
    else {
        res.status(400).json({ msg: 'Invalid credentials' });
    }
});
exports.authLogin = authLogin;
//# sourceMappingURL=AuthController.js.map