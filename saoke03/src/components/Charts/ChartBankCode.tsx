"use client";

import ChartThree from "@/components/Charts/ChartThree";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ChartFive from "@/components/Charts/ChartFive";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import numeral from "numeral";
import _ from "lodash";
import { ThongKeBankCode } from "@/types/chat";

const ChartBankCode: React.FC<{
    data: ThongKeBankCode[]
}> = (props) => {

    const total = useMemo(() => {
        let rs = 0
        for (let i = 0; i < props.data.length; i++) {
            const element = props.data[i];
            rs += element.count
        }

        return rs
    }, [props.data])


    const series = useMemo(() => {
        return {
            data: props.data.map((item, index) => {
                return {
                    x: item.bankCode || 'Không xác định',
                    y: item.count,
                    color: item.color
                }
            })
        }
    }, [props.data]);

    const options: ApexOptions = useMemo(() => {
        return {
            legend: {
                show: false
            },

            colors: series.data.map((x) => x.color),
            yaxis: {
                labels: {
                    formatter: (v) => {
                        return numeral(v).format('0,000')
                    }
                }
            },
            plotOptions: {
                treemap: {
                    distributed: true,
                    enableShades: false,

                },

            }
        }
    }, [series.data]);

    return (
        <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-7 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5">
            <div className="justify-between gap-4 sm:flex">
                <div>
                    <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
                        Thống kê ngân hàng
                    </h4>
                </div>
            </div>

            <div className="mb-8">
                <div className="f-12">
                    <ReactApexChart width={'100%'} height={400} options={options} series={[series]} type="treemap" />
                </div>
            </div>

            <div className="mx-auto w-full">
                <div className="w-full grid grid-cols-4 gap-4 items-center justify-center gap-y-2.5">
                    {props.data.sort((x, y) => -x.count + y.count).map((x, i) => {
                        let percent = ''
                        if (total !== 0) {
                            percent = numeral(x.count * 100 / total).format('0,000.00')
                        }
                        return <div className="w-full px-7.5" key={i}>
                            <div className="flex w-full items-center">
                                <span className="mr-2 block h-3 w-full max-w-3 rounded-full" style={{
                                    backgroundColor: x.color
                                }}></span>
                                <p className="flex w-full  text-body-sm font-medium text-dark dark:text-dark-6">
                                    <span className="grow"> {x.bankCode || 'Không xác định'} </span>
                                    <span className="flex-none"> {numeral(x.count).format('0,000')} {percent !== '' ? `(${percent}%)` : ''} </span>
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ChartBankCode;
