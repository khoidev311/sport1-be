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
const Joi = require("@hapi/joi");
const service = require("./demo.services");
exports.getList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = Joi.object({
            name: Joi.string().required(),
            age: Joi.number().optional(),
            address: Joi.string().optional().allow(null, ""),
        }).validate(req.query);
        if (body.error) {
            return {
                error: true,
                httpCode: 400,
                code: 400,
                message: "Lỗi khai báo sai: " + body.error,
            };
        }
        // chỗ này là viết type scriptype. chỗ data không cần bật eslint mà vẫn kiểm tra được biến đưa vào. khai báo sai là báo lỗi liền
        let data = {
            name: body.value.name,
            age: body.value.age,
            address: body.value.address,
        };
        // xử lý xong phần data cần truy vấn với service
        const list = yield service.getList(data);
        next(list);
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=demo.controllers.js.map