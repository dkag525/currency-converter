import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_VQuCx6K7v9HITeCjsHIWH3wtJOujlUMmfdzccRPu"
);

export const currenyConverter = async (fromCurrency, toCurrency, units) => {
  const response = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multi = response.data[toCurrency];
  return multi * units;
};

// currenyConverter("USD", "INR", 2).then((response) => {
//   console.log("Converted Currency:", response);
// });
