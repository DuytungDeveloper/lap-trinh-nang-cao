"use client";

import ChartThree from "@/components/Charts/ChartThree";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ChartFive from "@/components/Charts/ChartFive";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import DefaultSelectOption from "../SelectOption/DefaultSelectOption";
import { ThongKeCredit } from "@/types/chat";
import numeral from "numeral";

const ChartCredit: React.FC<{
  data?: ThongKeCredit
}> = (props) => {


  const getRandomColor = useCallback(() => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, [])

  const genColor = useCallback((num: number) => {
    let listColor = [...new Set((Array(num).fill(1)).map(() => getRandomColor()))]
    while (listColor.length !== num) {
      listColor.push(getRandomColor())
      listColor = [...new Set(listColor)]
    }

    return listColor
  }, [getRandomColor])

  const data = useMemo(() => {
    if (!props.data) return [];
    let ls = (props.data?.data ?? []).map(x => {
      return {
        ...x,
        label: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }).format(x.credit),
        color: 'red'
      }
    })
    const totalLeft = props.data.total - ls?.reduce((pr, cu) => pr + cu.total_transaction, 0)
    const percentLeft = 100 - ls?.reduce((pr, cu) => pr + cu.percent, 0)
    ls.push({
      label: 'Còn lại',
      credit: -9999,
      percent: percentLeft,
      total_transaction: totalLeft,
      color: 'red'

    })
    ls = genColor(ls.length).map((x, i) => {
      return {
        ...ls[i],
        color: x
      }
    })

    return ls
  }, [props.data])

  const series = useMemo(() => {
    if (!data || !data.length) return [];
    const ls = data.map(x => x.total_transaction) ?? []
    return ls
  }, [data]);
  console.log("🚀 ~ data ~ data:", data, series)




  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
    },
    // colors: ["#5750F1", "#5475E5", "#8099EC", "#ADBCF2"],
    colors: data.map(x => x.color),
    // labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
    labels: data.map(x => x.label) ?? [],
    legend: {
      show: true,
      position: "bottom",
      formatter: (legendName, opts) => {
        console.log("🚀 ~ opts:", opts)

        return legendName
      },
    },

    yaxis: {
      labels: {
        show: true
      }
    },


    plotOptions: {
      pie: {
        donut: {

          size: "80%",
          background: "transparent",
          // labels: {
          //   // total : {
          //   //   show : false
          //   // }
          //   value: {
          //     show: false,
          //     color: 'red'
          //   },
          //   name: {
          //     formatter: (v) => {
          //       return 'cccc'
          //     },
          //     color : 'blue',
          //     show : false
          //   }
          // }
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Tổng giao dịch",
              fontSize: "16px",
              fontWeight: "400",
              formatter: (v) => {
                return numeral(v.config.series.reduce((pr: any, cu: any) => pr + cu, 0)).format('0,000')
              }
            },

            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val
              }
            },

          },

        },
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1, 2, 3, 4, 5],
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        // colors: ['#333', '#999']
        // colors: ['red !important']
      },
      offsetX: 100,
      offsetY: 100,
      background: {
        foreColor: '#FFFF'
      },
      // formatter: (v) => {
      //   return 'cccc'
      // }
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 385,
          },
          legend: {
            position: 'bottom'
          }
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-7 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5 h-full">
      <div className="mb-9 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Thống kê giá tiền
          </h4>
        </div>
      </div>

      <div className="mb-8">
        <div className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>

      {/* <div className="mx-auto w-full max-w-[350px]">
        <div className="-mx-7.5 flex flex-wrap items-center justify-center gap-y-2.5">
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Desktop </span>
                <span> 65% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Tablet </span>
                <span> 34% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light-2"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Mobile </span>
                <span> 45% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light-3"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Unknown </span>
                <span> 12% </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ChartCredit;
