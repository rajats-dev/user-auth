import React, { Suspense, useEffect, useState } from "react";
import { movieData } from "../data";
import MovieUi from "../components/MovieUi";
import Loader from "../components/Loader";

const Details = () => {
  const [responseData, setResponseData] = useState([]);
  const data = movieData;

  const postJsonObj = async () => {
    try {
      const response = await fetch("/api/movieList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      setResponseData(res.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    postJsonObj();
  }, []);

  return (
    <>{responseData.length ? <MovieUi resData={responseData} /> : <Loader />}</>
  );
};

export default Details;
