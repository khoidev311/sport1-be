const Joi = require("@hapi/joi");

const service = require("./demo.services");
const populateResponse = require("../../utils/populate_response");

// viết file riêng nên phải import
import type { demoDataGetList } from "../../types/demoType";
// chat GPT cung cấp đoạn code này
import { Request, Response, NextFunction } from "express";

exports.getList = async (req: Request, res: Response, next: NextFunction) => {
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
    let data: demoDataGetList = {
      name: body.value.name,
      age: body.value.age,
      address: body.value.address,
    };

    // xử lý xong phần data cần truy vấn với service
    const list = await service.getList(data);

    next(populateResponse.success(list));
  } catch (e) {
    next(e);
  }
};
