import React, { useEffect, useState } from "react";

export default function CurrencyConverter() {
  let currencies = [
    "CAD",
    "HKD",
    "CZK",
    "INR",
    "CHF",
    "EUR",
    "JPY",
    "USD",
    "AUD",
  ];
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [otherCurrency, setotherCurrency] = useState("INR");
  const [baseValue, setbaseValue] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setConversionRate(data.rates[otherCurrency]);
      });
  }, [baseCurrency]);

  return (
    <div className="row mt-5">
      {" "}
      <div className="col-md-4 offset-md-4 border p-5">
        <h1>Currency Converter</h1>
        <form>
          <div className="form-row mt-5">
            <div className="col-3">
              <select
                className="form-control baseCurrency "
                onChange={(e) => {
                  setBaseCurrency(e.target.value);
                }}
                name="baseCurrency"
                value={baseCurrency}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-9">
              <input
                className="form-control"
                name="baseCurrency"
                type="number"
                value={baseValue}
                onChange={(e) => {
                  if (+e.target.value >= 0) {
                    setbaseValue(e.target.value);
                    setConvertedValue(
                      Math.round(e.target.value * conversionRate * 100) / 100
                    );
                  }
                }}
              ></input>
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col-3">
              <select
                className="form-control otherCurrency"
                onChange={(e) => {
                  setotherCurrency(e.target.value);
                }}
                name="otherCurrency"
                value={otherCurrency}
              >
                {currencies.map((currency) =>
                  baseCurrency !== currency ? (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ) : undefined
                )}
              </select>
            </div>
            <div className="col-9">
              <input
                name="baseCurrency"
                className="form-control"
                type="number"
                onChange={(e) => {
                  if (+e.target.value >= 0) {
                    setConvertedValue(e.target.value);
                    setbaseValue(
                      Math.round((e.target.value / conversionRate) * 100) / 100
                    );
                  }
                }}
                value={convertedValue}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
