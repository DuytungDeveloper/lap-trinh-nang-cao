import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import TableSearch from "@/components/Tables/TableSearch";

export const metadata: Metadata = {
  title:
    "CO2039 - Lập trình nâng cao - Đào Duy Tùng - 2033364 - Bảng sao kê giao dịch chuyển khoản đến tài khoản VCB của MTTQ từ 1/9/2024 - 10/9/2024",
  description: "This is Lập trình nâng cao",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <TableSearch />
        {/* <ECommerce /> */}
      </DefaultLayout>
    </>
  );
}
