const mongoose = require("mongoose");
const config = require("config");  // เรียก mongodb ใน json ที่เราสร้าง
const db = config.get("mongoURI");
const connectDB = async () => {
  try { // ใส่ await เพื่อให้รอจนเสร็จก่อน
    await mongoose.connect(db, { // คืออะไรไม่รู้แต่รู้แค่ว่ามันบอกให้ใส่ 55555
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); // ถ้าเชื่อมต่อสำเร็จให้โชว์
    console.log("Mongodb connect...");
  } catch (err) { // ถ้า มีปัญหา
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
