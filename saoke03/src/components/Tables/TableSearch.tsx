import SaoKeTable from "./SaoKeTable";

const TableSearch = () => {
    return (
        <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
            <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
                Bảng sao kê giao dịch chuyển khoản đến tài khoản VCB của MTTQ từ 1/9/2024 - 10/9/2024
            </h4>

            <div className="max-w-full overflow-x-auto">
                <SaoKeTable />
            </div>
        </div>
    );
};

export default TableSearch;
