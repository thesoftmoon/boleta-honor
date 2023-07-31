import { useState } from "react";
import { NumericFormat, numericFormat } from "react-number-format";

function MainCalculator() {
  const [mainValue, setMainValue] = useState("");
  const [totalInfo, setTotalInfo] = useState(false);
  const [totalGrossValue, setTotalGrossValue] = useState();
  const [totalLiquidValue, setTotalLiquidValue] = useState();
  const [discountValue, setDiscountValue] = useState();
  const [discountGrossValue, setDiscountGrossValue] = useState();

  // acctual discount is 13%

  const discount = 0.13;
  const remainer = 0.87;

  const grossInfo =
    totalInfo === true ? (
      <p>
        Tu valor bruto es de: <strong>${totalGrossValue}</strong> <br /> Tu
        descuento del 13% es de: <strong>${discountGrossValue}</strong>
      </p>
    ) : (
      ""
    );
  const liquidInfo =
    totalInfo === true ? (
      <p>
        Tu valor liquido es de: <strong>${totalLiquidValue}</strong>
        <br /> Tu descuento del 13% es de: <strong>${discountValue}</strong>
      </p>
    ) : (
      ""
    );

  const calculateValue = () => {
    grossValue();
    liquidValue();
    setMainValue("");
    setTotalInfo(true);
    discountValueCalc();
    grossDiscountValue();
  };

  const valueFormatter = (e) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    let parsedValue = parseInt(value, 10);
    setMainValue(parsedValue);
  };

  const grossValue = () => {
    setTotalGrossValue(
      mainValue + Math.round((mainValue / remainer) * discount)
    );
  };

  const liquidValue = () => {
    setTotalLiquidValue(Math.round(mainValue));
  };

  const discountValueCalc = () => {
    setDiscountValue(Math.round(mainValue * discount));
  };

  const grossDiscountValue = () => {
    setDiscountGrossValue(Math.round((mainValue / remainer) * discount));
  };
  const MAX_LIMIT = 1000000000;

  return (
    <div className="row d-flex justify-content-center align-items-center content">
      <div className="col-11 col-md-6">
        <div className="card main-card px-3 px-md-5 p-4 text-center">
          <h2 className="mb-4 text-uppercase">
            Calculadora
            <br />
            boletas de honorarios
          </h2>
          <p className="mb-4">
            Cotiza de forma fácil las cifras para tu boleta de honorarios,
            ingresa la cifra que deseas liquida o bruta y obtén los cálculos 😊
          </p>

          <div className="input-group mb-3">
            <NumericFormat
              className="form-control"
              thousandSeparator="."
              decimalSeparator=","
              onChange={valueFormatter}
              value={mainValue}
              allowLeadingZeros={false}
              allowNegative={false}
              isAllowed={(values) => {
                const { floatValue } = values;
                return floatValue < MAX_LIMIT;
              }}
            />

            <button
              className="btn btn-outline-light"
              type="button"
              onClick={calculateValue}
            >
              Calcular
            </button>
          </div>
          {/* Respuesta calculos */}
          {grossInfo}
          {totalInfo === true ? <hr /> : ""}
          {liquidInfo}
          {/* Fin respuesta calculos */}
        </div>
      </div>
    </div>
  );
}

export default MainCalculator;
