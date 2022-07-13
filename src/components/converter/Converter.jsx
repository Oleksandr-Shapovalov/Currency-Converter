import React, { memo } from "react";
import { useState } from "react";
import { useRequest } from "../../async/requestContext";
import CurrencyInput from "./currencyInput/CurrencyInput";

export default memo(() => {
  const { rates } = useRequest();
  const [firstValue, SetFirstValue] = useState("");
  const [firstCurrency, SetFirstCurrency] = useState("");
  const [secondValue, SetSecondValue] = useState("");
  const [secondCurrency, SetSecondCurrency] = useState("");

  const newVal = (prev, val, multiply, divide) => {
    if (divide && multiply && typeof rates[divide] === "number")
      return ((val * rates[multiply]) / rates[divide]).toFixed(2);
    else if (prev) return prev;
    else return "";
  };

  const firstValueChanger = (e) => {
    if (/^[\d.,:]*$/.test(e.target.value)) {
      SetSecondValue((prev) =>
        newVal(prev, e.target.value, secondCurrency, firstCurrency)
      );
      SetFirstValue(e.target.value);
    }
  };
  const firstCurrencyChanger = (e) => {
    SetSecondValue((prev) => newVal(prev, firstValue, secondCurrency, e));
    SetFirstCurrency(e);
  };
  const secondValueChanger = (e) => {
    if (/^[\d.,:]*$/.test(e.target.value)) {
      SetFirstValue((prev) =>
        newVal(prev, e.target.value, firstCurrency, secondCurrency)
      );
      SetSecondValue(e.target.value);
    }
  };
  const secondCurrencyChanger = (e) => {
    SetFirstValue((prev) => newVal(prev, secondValue, firstCurrency, e));
    SetSecondCurrency(e);
  };

  return (
    <div className="wrap__converter">
      <CurrencyInput
        useInput={{ onChange: firstValueChanger, value: firstValue }}
        useCurrency={{ onChange: firstCurrencyChanger, value: firstCurrency }}
      />
      <CurrencyInput
        useInput={{ onChange: secondValueChanger, value: secondValue }}
        useCurrency={{
          onChange: secondCurrencyChanger,
          value: secondCurrency,
        }}
      />
    </div>
  );
});
