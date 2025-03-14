import { useState } from "react";
import { NumericFormat, numericFormat } from "react-number-format";

function MainCalculator() {
  const [mainValue, setMainValue] = useState("");
  const [totalInfo, setTotalInfo] = useState(false);
  const [totalGrossValue, setTotalGrossValue] = useState();
  const [totalLiquidValue, setTotalLiquidValue] = useState();
  const [discountValue, setDiscountValue] = useState();
  const [discountGrossValue, setDiscountGrossValue] = useState();

  // acctual discount is 13,75% in 2024 year

  const discount = 0.145;
  const remainer = 1 - discount;
  const discountToPercentage = parseFloat((discount * 100).toFixed(1));

  const grossInfo =
    totalInfo === true ? (
      <p>
        Tu valor bruto es de: <strong>${totalGrossValue}</strong> <br /> Tu
        descuento del {discountToPercentage}% es de: <strong>${discountGrossValue}</strong>
      </p>
    ) : (
      ""
    );
  const liquidInfo =
    totalInfo === true ? (
      <p>
        Tu valor liquido es de: <strong>${totalLiquidValue}</strong>
        <br /> Tu descuento del {discountToPercentage}% es de: <strong>${discountValue}</strong>
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
    let value = mainValue + Math.round((mainValue / remainer) * discount);
    let finalValue = value.toLocaleString('es-ES');
    setTotalGrossValue(finalValue);
  };

  const liquidValue = () => {
    let value = Math.round(mainValue);
    let finalValue = value.toLocaleString('es-ES');
    setTotalLiquidValue(finalValue);
  };

  const discountValueCalc = () => {
    let value = Math.round(mainValue * discount);
    let finalValue = value.toLocaleString('es-ES');
    setDiscountValue(finalValue);
  };

  const grossDiscountValue = () => {
    let value = Math.round((mainValue / remainer) * discount)
    let finalValue = value.toLocaleString('es-ES');
    setDiscountGrossValue(finalValue);
  };

  return (
    <div className="row d-flex justify-content-center align-items-center content">
      <div className="col-11 col-md-6">
        <div className="card main-card px-3 px-md-5 p-4 text-center animate__animated animate__fadeInRightBig">
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
            placeholder="Ingresa una cifra"
              className="form-control"
              thousandSeparator="."
              decimalSeparator=","
              onChange={valueFormatter}
              value={mainValue}
              allowLeadingZeros={false}
              allowNegative={false}
              //Here you avoid the initial number, now you can delete it
              isAllowed={({ floatValue }) => floatValue === undefined || floatValue <= 999999999}
              //This below won't let you delete the initial number
              //isAllowed={(values) => {
              //  const { floatValue } = values;
              //  return floatValue < MAX_LIMIT;
              //}}
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
