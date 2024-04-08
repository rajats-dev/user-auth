import React from "react";
import { companyInfo } from "../data";

const CompanyInfo = () => {
  const info = companyInfo;
  return (
    <div className="flex justify-center m-4">
      <ul className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Company Info</h1>
        <li className="flex">
          <p className="font-bold">{"Company"}</p>: {info.Company}
        </li>
        <li className="flex">
          <p className="font-bold"> {"Address"}</p> : {info.Address}
        </li>
        <li className="flex">
          <p className="font-bold"> {"Phone"}</p> : {info.Phone}
        </li>
        <li className="flex">
          <p className="font-bold">{"Email"} </p>: {info.Email}
        </li>
      </ul>
    </div>
  );
};

export default CompanyInfo;
