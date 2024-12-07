import mongoose, { Schema } from "mongoose";
import dayjs from "dayjs";
const transactionSchema = new Schema({
    code: { type: String, required: true },
    date_time: { type: Date, required: true },
    trans_no: Number,
    credit: Number,
    debit: Number,
    detail: String,
    bankCode: { type: String, required: false },
});

// Create a text index for full-text search
transactionSchema.index({
    code: "text",
    detail: "text",
    bankCode: "text",
});

// Add a virtual to format `date_time` as DD/MM/YYYY
transactionSchema.virtual("formatted_date_time").get(function () {
    return dayjs(this.date_time).format("DD/MM/YYYY");
});
// Include virtuals in JSON output
transactionSchema.set("toJSON", { virtuals: true });
transactionSchema.set("toObject", { virtuals: true });

const TransactionMongoService = mongoose.model(
    "Transaction",
    transactionSchema
);