import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableSearch from "@/components/Tables/TableSearch";

export const metadata: Metadata = {
  title: "Lập trình nâng cao",
  description:
    "This is Lập trình nâng cao",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sao Kê" />

      <div className="flex flex-col gap-10 ">
        <TableSearch />

      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
