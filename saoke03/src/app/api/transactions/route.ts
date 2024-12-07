import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/mongodb';
import Transaction from '../../../models/Transaction';
import { NextRequest } from "next/server";
import DataTable, { AjaxData } from "datatables.net-dt";
import _ from 'lodash';
connectToDatabase();


export async function POST(request: NextRequest) {
    const queryData: AjaxData = await request.json()
    const start = queryData.start || 0; // Start index
    const length = queryData.length || 10; // Number of records per page
    const search = (queryData.search as any)?.value || ''; // Search value
    const query: { [key: string]: any } = search
        ? {
            $or: [
                {
                    code: {
                        $regex: search, $options: 'i'
                    }
                },
                {
                    detail: {
                        $regex: search, $options: 'i'
                    }
                },
                {
                    bankCode: {
                        $regex: search, $options: 'i'
                    }
                },
                {
                    formatted_date_time: {
                        $regex: search, $options: 'i'
                    }
                },
            ],
            // $text: { $search: search },
            // $and: []
        }
        : {};

    queryData.columns.forEach(x => {
        if (x.search.value) {
            if (!query['$and']) {
                query['$and'] = [];
            }
            switch (x.data) {
                case 'date_time':
                    query.$and?.push({
                        formatted_date_time: {
                            $regex: x.search.value, $options: 'i'
                        }
                    })
                    break;
                case 'credit':
                    query.$and?.push({
                        credit_string: {
                            $regex: x.search.value, $options: 'i'
                        }
                    })
                    break;

                default:
                    query.$and?.push({
                        [x.data]: {
                            $regex: x.search.value, $options: 'i'
                        }
                    })
                    break;
            }

        }
    })

    if (queryData.data) {
        if (queryData.data.date && Array.isArray(queryData.data.date)) {
            if (!query['$and']) {
                query['$and'] = [];
            }
            query['$and'].push({
                date_time: {
                    $gte: new Date(queryData.data.date[0]),
                    $lte: new Date(queryData.data.date[1]),
                }
            })
        }

        if (queryData.data.credit && Array.isArray(queryData.data.credit)) {
            if (!query['$and']) {
                query['$and'] = [];
            }
            query['$and'].push({
                credit: {
                    $gte: (queryData.data.credit[0]),
                    $lte: (queryData.data.credit[1]),
                }
            })
        }
    }

    const order = queryData.order || [];
    const sort: Record<string, any> = {
        // score: { $meta: 'textScore' }
    };
    order.forEach(({ column, dir }) => {
        const colName = queryData.columns[column].data;
        sort[colName] = dir === 'asc' ? 1 : -1;
    });

    const mainQuery = [
        {
            $addFields: {
                formatted_date_time: {
                    $dateToString: {
                        format: '%d/%m/%Y', date: '$date_time',
                        timezone: 'Asia/Ho_Chi_Minh', // Vietnam timezone
                    },
                },
                credit_string: {
                    $toString: '$credit'
                }
            },
        }, {
            $match: query,
        }
    ]




    const fullQueCount = ([
        ...mainQuery,
        {
            $count: 'totalCount',
        },
    ])

    // Get total records count
    // console.log(await Transaction.listIndexes())
    const totalRecords = await Transaction.countDocuments();
    const totalRecordsFilteredRs = (await Transaction.aggregate(fullQueCount))
    const totalRecordsFiltered = totalRecordsFilteredRs?.[0]?.totalCount ?? 0;
    const fullQue: any[] = ([
        ...mainQuery,
    ])
    if (!_.isEmpty(sort)) {
        fullQue.push({
            $sort: sort,
        })
    }
    fullQue.push({
        $skip: start,
    })
    fullQue.push({
        $limit: length
    })
    const data = await Transaction.aggregate(fullQue)

    return Response.json({
        draw: queryData.draw || 1,
        recordsTotal: totalRecords,
        recordsFiltered: totalRecordsFiltered,
        data,
    });
}


export async function GET(request: NextRequest) {
    const result = await Transaction.aggregate([
        {
            $group: {
                _id: null, // Group all documents together
                maxCredit: { $max: "$credit" },
                minCredit: { $min: "$credit" },

                maxDate: { $max: "$date_time" },
                minDate: { $min: "$date_time" },

            },
        },
        {
            $project: {
                _id: 0, // Exclude the `_id` field from the result
                maxCredit: 1,
                minCredit: 1,

                maxDate: 1,
                minDate: 1
            },
        },
    ]);

    return Response.json(result[0]);
}