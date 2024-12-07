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
import dayjs from "dayjs";

const ChartDateTime: React.FC<{
    data?: ThongKeDate[]
}> = (props) => {
    const workingData = useMemo(() => {
        return props.data?.sort((x, y) => x.timestamp - y.timestamp) ?? []
    }, [props.data])
    console.log("🚀 ~ workingData ~ workingData:", workingData)

    const minDate = useMemo(() => workingData && workingData.length >= 1 ? workingData[0] : undefined, [workingData])

    const maxDate = useMemo(() => workingData && workingData.length > 0 ? workingData[workingData.length - 1] : undefined, [workingData])

    const series = useMemo(() => {
        return [

            {
                name: 'Số tiền lớn nhất',
                type: 'column',
                data: workingData?.map(x => x.highest_credit) ?? []
            },
            {
                name: 'Tổng số giao dịch',
                type: 'area',
                data: workingData?.map(x => x.total_transaction) ?? []
            },
            {
                name: 'Tổng tiền',
                type: 'line',
                data: workingData?.map(x => x.total_credit) ?? []
            },

        ]
    }, [workingData]);

    const options = useMemo<ApexOptions>(() => {
        return {
            chart: {
                height: 350,
                type: 'line',
                stacked: false,
                toolbar: {
                    tools: {
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        selection: false
                    },
                    autoSelected : undefined,
                    
                }
            },
            stroke: {
                width: [0, 2, 5],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '60%',
                }
            },

            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            // labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
            //     '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
            // ],
            labels: workingData?.map(x => dayjs(x.date_time).format('DD/MM/YYYY')) ?? [],
            // markers: {
            //     size: 0
            // },
            // xaxis: {
            //     type: 'datetime'
            // },
            yaxis: [
                {
                    title: {
                        text: 'Số tiền lớn',
                    },
                    seriesName: 'Số tiền lớn nhất',
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#008FFB'
                    },
                    labels: {
                        style: {
                            colors: '#008FFB',
                        },
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }).format(y)
                            }
                            return y;

                        }
                    },
                },
                {
                    seriesName: 'Tổng số giao dịch',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#00E396'
                    },
                    labels: {
                        style: {
                            colors: '#00E396',
                        },
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return numeral(y).format('0,000') + ' giao dịch'
                            }
                            return y;

                        }
                    },
                    title: {
                        text: "Số lượng giao dịch",
                        style: {
                            color: '#00E396',
                        }
                    },
                },
                {
                    seriesName: 'Tổng tiền',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#00E396'
                    },
                    labels: {
                        style: {
                            colors: '#00E396',
                        },
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }).format(y)
                            }
                            return y;

                        }
                    },
                    title: {
                        text: "Tổng tiền",
                        style: {
                            color: '#00E396',
                        }
                    },
                }
            ],
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y, op) {
                        if (typeof y !== "undefined") {
                            // console.log("🚀 ~ options ~ op:", op)
                            if (op.seriesIndex === 1) return numeral(y).format('0,000') + ' giao dịch'
                            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }).format(y)
                        }
                        return y;

                    }
                }
            }
        }
    }, [series, workingData]);

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
                    <ReactApexChart width={'100%'} height={400} options={options} series={series} type="line" />
                </div>
            </div>


        </div>
    );
};

export default ChartDateTime;
