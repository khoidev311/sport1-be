const { connectToMongoDB } = require("../../database/mongodbConnector");

import type { demoDataGetList } from "../../types/demoType";

exports.getList = async (data: demoDataGetList) => {
  // demo MVC nếu không kết nối database
  const a = 5;
  const b = 10;
  let tong = "tổng là: ${a + b}";
  //return tong;

  // Kết nối đến MongoDB
  const db = await connectToMongoDB();
  try {
    // Lấy collection 'user'
    const collection = db.collection("user");

    // Thực hiện truy vấn select trên collection 'product_color'
    const result = await collection.find({ name: data.name }).toArray();

    // Trả về kết quả
    return result;
  } catch (error) {
    console.error("Error while fetching user:", error);
    throw error;
  }
};
