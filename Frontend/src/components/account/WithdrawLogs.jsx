import moment from "moment";
import React from "react";
import { FcBullish } from "react-icons/fc";
import { useSelector } from "react-redux";
import { PaginationWithdrawList } from "../helpers/PaginationWithdrawList";
import { FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";

export const WithdrawLogs = () => {
  //Get account data
  const { account } = useSelector((state) => state.userAccount);

  //Get Withdraw Logs List
  const withdrawLogs = account.withdraw_logs;

  //Withdarw Log UI Data
  const withdrawLog = (log) => {
    return (
      <li
        key={log._id}
        className="min-h-[150px] my-4 flex flex-col gap-2 items-center justify-center flex-wrap bg-blue-200 p-4 border-x-4 border-blue-800 rounded shadow"
      >
        <p className="w-full flex items-center md:justify-center">
          <FaCalendarAlt className="inline-block mr-2" />
          Date:
          <span className="ml-auto md:mx-2 p-2 bg-orange-600 rounded text-white">
            {moment(log.createdAt).format("DD-MM-YYYY")}
          </span>
        </p>

        <p className="w-full flex items-center md:justify-center">
          <FaMoneyBillWave className="inline-block mr-2" />
          Amount:
          <span className="ml-auto md:mx-2 p-2 text-white bg-green-500 rounded">
            {new Intl.NumberFormat("ar-EG", {
              style: "currency",
              currency: "EGP",
            }).format(log.withdrawed_amount)}
          </span>
        </p>
      </li>
    );
  };

  //Incase Of No Withdraw Logs
  if (!withdrawLogs || withdrawLogs.length === 0)
    return (
      <div className="max-w-5xl w-full p-6 bg-slate-50 rounded shadow-lg shadow-black/30">
        <div className="min-h-[150px] my-4 flex flex-col gap-4 items-center justify-center flex-wrap  bg-yellow-100 p-4 border-x-4 border-yellow-800 rounded shadow">
          <p className="text-gray-800 text-xl p-4 font-bold">
            There is no Withdraw Logs yet!
          </p>
        </div>
      </div>
    );

  return (
    <div className="max-w-5xl w-full px-2 py-6 md:p-6 bg-slate-50 rounded shadow-lg shadow-black/30">
      <h3 className="flex justify-center items-center text-2xl text-center font-bold px-2 py-4 mb-10 bg-blue-200 border-b-4 border-blue-800 rounded shadow ">
        <FcBullish className="mr-1" size={50} />
        Withdraw Logs
      </h3>

      {/* incase of there are Withdraw Log */}
      {withdrawLogs && withdrawLogs.length !== 0 && (
        <PaginationWithdrawList
          withdrawLogs={withdrawLogs.slice(0).reverse()}
          withdrawLog={withdrawLog}
          rowsPerPage={10}
        />
      )}
    </div>
  );
};
