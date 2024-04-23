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
Object.defineProperty(exports, "__esModule", { value: true });
const { connectToMongoDB } = require("../../database/mongodbConnector");
exports.getList = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // demo MVC nếu không kết nối database
    const a = 5;
    const b = 10;
    let tong = "tổng là: ${a + b}";
    //return tong;
    // Kết nối đến MongoDB
    const db = yield connectToMongoDB();
    try {
        // Lấy collection 'user'
        const collection = db.collection("user");
        // Thực hiện truy vấn select trên collection 'product_color'
        const result = yield collection.find({ name: data.name }).toArray();
        // Trả về kết quả
        return result;
    }
    catch (error) {
        console.error("Error while fetching user:", error);
        throw error;
    }
});
//# sourceMappingURL=demo.services.js.map