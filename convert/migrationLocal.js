// import mongoose from "mongoose";
// const datas = require("./chuyen_khoan.json");
const fs = require("fs");
const mongoose = require("mongoose");
const moment = require("moment");
const dayjs = require("dayjs"); // Install using `npm install dayjs`
const Transaction = require("./transactionModel");
dayjs.locale("Asia/Ho_Chi_Minh");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const migraData = (filePath) => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async (val) => {
      console.log("Database connected");

      const datas = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      await val.connection.dropCollection("Transaction");
      await Transaction.syncIndexes();
      try {
        const inRs = await Transaction.insertMany(datas, {
          ordered: false,
        });
        console.log("INSERT DONE", inRs.length);
      } catch (error) {
        console.log("🚀 ~ .then ~ error:", error);
      }
      mongoose.connection.close();
    })
    .catch((err) => console.error("Database connection error:", err));
};

function findDuplicates(arr) {
  const counts = new Map();

  // Count occurrences of each value
  arr.forEach((item) => {
    counts.set(item, (counts.get(item) || 0) + 1);
  });

  // Extract items that occur more than once
  const duplicates = Array.from(counts.keys()).filter(
    (item) => counts.get(item) > 1
  );

  return duplicates;
}

module.exports = { migraData };
