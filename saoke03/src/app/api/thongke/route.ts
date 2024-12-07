import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/mongodb';
import Transaction from '../../../models/Transaction';
import { NextRequest } from "next/server";
import _ from 'lodash';
connectToDatabase();


const getTransactionBankCode = async () => {
    const list = await Transaction.aggregate([{
        $group: {
            _id: "$bankCode", // Field to group by

            count: { $sum: 1 } // Count the number of documents in each group
        }
    }
        , {
        $project: {
            bankCode: "$_id",
            count: 1,
            _id: 0 // Remove the original _id field
        }
    }
    ])

    return {
        data: list,
        total: list.reduce((prevV, curr) => {
            return prevV + curr.count
        }, 0)
    }
}

const getTransactionDateTime = async () => {
    const list = await Transaction.aggregate([
        {
            $group: {
                _id: "$date_time",
                total_credit: { $sum: "$credit" },
                highest_credit: { $max: "$credit" },
                total_transaction: { $sum: 1 }
            }
        },
        {
            $addFields: {
                date_time: { $toDate: "$_id" }
            }
        },
        {
            $project: {
                _id: 0,
                date_time: 1,
                total_credit: 1,
                highest_credit: 1,
                total_transaction: 1
            }
        }
    ])

    return list
}

const getTransactionCommon = async () => {
    const totalCredit = (await Transaction.aggregate([
        {
            $group: {
                _id: null,
                total_credit: { $sum: "$credit" }
            }
        },
        {
            $project: {
                _id: 0,
                total_credit: 1
            }
        }
    ]))[0].total_credit
    const totalRecord = await Transaction.countDocuments();

    const allMoney = (await Transaction.distinct('credit')).length
    const allBank = (await Transaction.distinct('bankCode')).length


    return {
        totalCredit,
        totalRecord,
        allMoney,
        allBank,
    }
}

const getTransactionCredit = async () => {
    const list = await Transaction.aggregate([
        {
            $group: {
                _id: "$credit",

                total_transaction: { $sum: 1 }
            }
        },
        {
            $addFields: {
                credit: "$_id"
            }
        },
        {
            $project: {
                _id: 0,
                credit: 1,

                total_transaction: 1
            },

        },
        {
            $sort: {
                total_transaction: -1
            }
        },
        {
            $limit: 8
        }
    ])
    const totalRecords = await Transaction.countDocuments();


    return {
        data: list.map(x => {
            return {
                ...x,
                percent: Math.round(x.total_transaction * 100 / totalRecords)
            }
        }), total: totalRecords
    }
}


export async function GET(request: NextRequest) {

    const thongKeName = request.nextUrl.searchParams.get('name')
    if (!thongKeName) return Response.json(await getTransactionCommon())

    switch (thongKeName) {
        case 'banks':
            return Response.json(await getTransactionBankCode())
            break;

        case 'date_time':
            return Response.json(await getTransactionDateTime())
            break;

        case 'credit':
            return Response.json(await getTransactionCredit())
            break;

        default:
            return Response.json(await getTransactionCommon())
            break;
    }
}
