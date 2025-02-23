import React, { use, useEffect, useState } from "react";
import { Select } from "./Select";

function Exchange() {
  const [data, setData] = useState("");
  const [currencyList, setCurrencyList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
      );
      const res = await data.json();
      setData(res.date);
      setCurrencyList(res.eur);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Currency Exchange</h1>
      <p>{data}</p>
      <Select currencyList={currencyList} />
    </div>
  );
}

export default Exchange;
