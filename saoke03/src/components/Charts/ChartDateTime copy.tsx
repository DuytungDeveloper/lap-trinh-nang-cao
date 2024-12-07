"use client";

import ChartThree from "@/components/Charts/ChartThree";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ChartFive from "@/components/Charts/ChartFive";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import numeral from "numeral";
import _ from "lodash";
import { ThongKeDate } from "@/types/chat";
import moment from "moment";

const ChartDateTime: React.FC<{
    data: ThongKeDate[]
}> = (props) => {
    const workingData = useMemo(() => {
        return props.data.sort((x, y) => x.timestamp - y.timestamp)
    }, [props.data])

    const minDate = useMemo(() => workingData.length >= 1 ? workingData[0] : undefined, [workingData])

    const maxDate = useMemo(() => workingData.length > 0 ? workingData[workingData.length - 1] : undefined, [workingData])

    const series = useMemo(() => {
        return {
            name: 'Giá trị giao dịch',

            data: workingData.map((x) => {
                return [
                    x.timestamp,
                    x.total_credit
                ]
            })
        }
    }, [workingData]);

    const options = useMemo<ApexOptions>(() => {
        return {
            chart: {
                // id: 'area-datetime',
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false,
                    autoScaleYaxis: true
                },
                stacked: false,
            },
            stroke: {
                curve: 'smooth'
            },
            annotations: {
                // yaxis: [{
                //     y: 30,
                //     borderColor: '#999',
                //     label: {
                //         show: true,
                //         text: 'Support',
                //         style: {
                //             color: "#fff",
                //             background: '#00E396'
                //         }
                //     }
                // }],
                // xaxis: [{
                //     x: minDate?.date_time.getTime(),
                //     borderColor: '#999',
                //     yAxisIndex: 0,
                //     label: {
                //         show: true,
                //         text: 'Rally',
                //         style: {
                //             color: "#fff",
                //             background: '#775DD0'
                //         }
                //     }
                // }]
            },
            dataLabels: {
                enabled: false
            },
            // markers: {
            //     size: 0,
            //     style: 'hollow',
            // },
            xaxis: {
                type: 'datetime',
                // min: minDate?.date_time.getTime(),
                // tickAmount: 6,
                labels: {
                    formatter: v => {
                        return moment(v).format('DD/MM/YYYY')
                    }
                }
            },
            yaxis: {
                // opposite: true
                labels: {
                    formatter: v => {
                        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }).format(v)
                    }
                }
            },
            // legend: {
            //     // horizontalAlign: 'left'
            //     formatter : (v)=>{
            //         return numeral(v).format('0,000')
            //     }
            // },
            // tooltip: {
            //     x: {
            //         format: 'dd MM yyyy'
            //     }
            // },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },
        }
    }, [series.data]);

    return (
        <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-7 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5">
            <div className="justify-between gap-4 sm:flex">
                <div>
                    <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
                        Thống kê ngày giao dịch
                    </h4>
                </div>
            </div>

            <div className="mb-8">
                <div className="f-12">
                    <ReactApexChart width={'100%'} height={400} options={options} series={[series, {
                        name: 'TEAM A',
                        type: 'column',
                        data: series.data.map(()=>_.random(300000,1_000_000_000))
                    }]} type="area" />
                </div>
            </div>


        </div>
    );
};

export default ChartDateTime;
