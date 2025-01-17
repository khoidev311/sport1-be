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
exports.authToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const checkToken = req.headers["authorization"];
    const token = checkToken && checkToken.split(" ")[1];
    if (!token) {
        return res.status(401).json({ msg: 'User does not accept to api' });
    }
    jsonwebtoken_1.default.verify(checkToken.split(" ")[1], process.env.ACCESS_TOKEN_SECRET, (error) => {
        if (error)
            return res.status(403);
        next();
    });
});
exports.authToken = authToken;
//# sourceMappingURL=authToken.js.map