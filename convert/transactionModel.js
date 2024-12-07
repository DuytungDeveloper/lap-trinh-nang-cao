const dayjs = require("dayjs");
const mongoose = require("mongoose");
const { Schema } = mongoose;

// dayjs.tz.setDefault('Asia/Bangkok');
dayjs.locale("Asia/Ho_Chi_Minh");

const TransactionSchema = new Schema({
  code: { type: String, required: true },
  date_time: { type: Date, default: Date.now },
  trans_no: { type: Number, required: true },
  credit: { type: Number, required: true },
  debit: { type: Number, required: true },
  detail: { type: String, required: true },
  bankCode: { type: String, required: false },
  searchable: { type: String, required: true },
});

// Add a virtual to format `date_time` as DD/MM/YYYY
TransactionSchema.virtual("formatted_date_time").get(function () {
  return dayjs(this.date_time).format("DD/MM/YYYY");
});

TransactionSchema.index(
  { searchable: "text" },
  {
    // default_language : 'vi',
    weights: {
      searchable: 6,
      date_time: 5,
      credit: 4,
      detail: 3,
      code: 2,
      bankCode: 1,
    },
  }
);

TransactionSchema.index({ date_time: 1 });

// Include virtuals in JSON output
TransactionSchema.set("toJSON", { virtuals: true });
TransactionSchema.set("toObject", { virtuals: true });

// Check if the model is already compiled (important for hot reloading)
const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
