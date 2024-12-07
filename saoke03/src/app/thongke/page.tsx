import BasicChart from "@/components/Charts/BasicChart";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartFive from "@/components/Charts/ChartFive";
import ThongKeChart from "@/components/Charts/ThongKeChart";

import { getServerSession } from "next-auth/next";
import { redirect, RedirectType } from "next/navigation";
export const metadata: Metadata = {
  title: "Lập trình nâng cao",
  description: "This is Lập trình nâng cao",
  // other metadata
};






const ThongKePage: React.FC = async () => {

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Thống kê" />

      <ThongKeChart />
    </DefaultLayout>
  );
};

export default ThongKePage;
