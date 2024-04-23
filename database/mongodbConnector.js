const { MongoClient } = require("mongodb");

// Hàm để kết nối đến MongoDB
async function connectToMongoDB() {
  const uri = "mongodb+srv://khoidev311:8heCdSJRCFliwvfk@server1.a2yvgjo.mongodb.net/"; // Thay đổi URI kết nối tới cơ sở dữ liệu của bạn
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error while connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = { connectToMongoDB };
