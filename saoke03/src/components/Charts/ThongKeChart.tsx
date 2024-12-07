"use client";

import ChartThree from "@/components/Charts/ChartThree";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ChartFive from "@/components/Charts/ChartFive";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import numeral from "numeral";
import _ from "lodash";
import { ThongKeBankCode, ThongKeCommon, ThongKeCredit, ThongKeDate } from "@/types/chat";
import ChartBankCode from "./ChartBankCode";
import ChartDateTime from "./ChartDateTime";
import moment from "moment";
import ChartCredit from "./ChartCredit";
import DataStatsOneThongKe from "../DataStats/DataStatsOneThongKe";

const ThongKeChart: React.FC = () => {
  const [bankChartData, setBankChartData] = useState<ThongKeBankCode[]>([])
  const [dateChartData, setDateChartData] = useState<ThongKeDate[]>([])
  const [creditChartData, setCreditChartData] = useState<ThongKeCredit | undefined>()
  const [commonData, setCommonData] = useState<ThongKeCommon | undefined>()

  const getRandomColor = useCallback(() => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, [])

  useEffect(() => {
    fetch('/api/thongke?name=banks').then(async (rs) => {
      const data = await rs.json()
      if (data.data) {
        let convertData = _.cloneDeep(data.data)
        let listColor = [...new Set(convertData.map(() => getRandomColor()))]
        while (listColor.length !== convertData.length) {
          listColor.push(getRandomColor())
          listColor = [...new Set(listColor)]
        }

        setBankChartData(convertData.map((x: any, i: number) => {
          return {
            ...x,
            color: listColor[i]
          }
        }).sort((x: { count: number; }, y: { count: number; }) => y.count - x.count))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/api/thongke?name=date_time').then(async (rs) => {
      const responseData = await rs.json()
      if (Array.isArray(responseData) && responseData.length > 0) {
        // setDateChartData()
        const rs: ThongKeDate[] = responseData.map((x: any) => {
          return {
            date_time: new Date(x.date_time),
            timestamp: moment(x.date_time).local().toDate().getTime(),
            total_credit: Number(x.total_credit),
            highest_credit: Number(x.highest_credit),
            total_transaction: Number(x.total_transaction),
          }
        })
        setDateChartData(rs)
      }
    })
  }, [])

  useEffect(() => {
    fetch('/api/thongke').then(async (rs) => {
      const responseData = await rs.json()
      if (responseData) {
        setCommonData(responseData)
      }
    })
  }, [])

  useEffect(() => {
    fetch('/api/thongke?name=credit').then(async (rs) => {
      const responseData = await rs.json()
      if (responseData && Array.isArray(responseData.data) && responseData.data.length > 0) {
        setCreditChartData(responseData)
      }
    })
  }, [])

  return <>
    <DataStatsOneThongKe data={commonData} />

    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
      <div className="col-span-8">
        <ChartDateTime data={dateChartData} />
      </div>
      <div className="col-span-4">
        <ChartCredit data={creditChartData} />
      </div>
      {/* <ChartThree />
      <MapOne /> */}
      <div className="col-span-12">
        <ChartBankCode data={bankChartData} />
      </div>
      {/* <div className="col-span-12 xl:col-span-8">
        <TableOne />
      </div>
      <ChatCard /> */}
    </div>
  </>

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">

      <div className="col-span-6">

        <ChartCredit data={creditChartData} />

      </div>

      <div className="col-span-6">

        <ChartCredit data={creditChartData} />

      </div>

      <div className="col-span-12">

        <ChartDateTime data={dateChartData} />
      </div>



      <div className="col-span-12">
        <ChartBankCode data={bankChartData} />
      </div>
    </div>
  );
};

export default ThongKeChart;
