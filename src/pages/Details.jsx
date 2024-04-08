import React, { useEffect } from "react";
import { companyInfo, movieData } from "../data";

const Details = () => {
  const data = movieData;
  const info = companyInfo;

  const postJsonObj = async () => {
    try {
      const response = await fetch("/api/movieList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    postJsonObj();
  }, [data]);

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

export default Details;
