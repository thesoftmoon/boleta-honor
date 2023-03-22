import { useState } from "react";

function MainCalculator() {
  const [mainValue, setMainValue] = useState("");
  const [totalInfo, setTotalInfo] = useState(false);
  const [totalGrossValue, setTotalGrossValue] = useState();
  const [totalLiquidValue, setTotalLiquidValue] = useState();
  const [discountValue, setDiscountValue] = useState();

  // acctual discount is 13%

  const discount = 0.13;

  const grossInfo =
    totalInfo === true ? (
      <p>
        Tu valor bruto es de: ${totalGrossValue} <br /> Tu descuento del 13% es
        de: ${discountValue}
      </p>
    ) : (
      ""
    );
  const liquidInfo =
    totalInfo === true ? (
      <p>
        Tu valor liquido es de: ${totalLiquidValue}
        <br /> Tu descuento del 13% es de: ${discountValue}
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
  };

  const grossValue = () => {
    setTotalGrossValue(mainValue + mainValue * discount);
  };

  const liquidValue = () => {
    setTotalLiquidValue(mainValue);
  };

  const discountValueCalc = () => {
    setDiscountValue(mainValue * discount);
  };

  return (
    <div className="row d-flex justify-content-center align-items-center content">
      <div className="col-12 col-md-8">
        <div className="card main-card px-3 px-md-5 pt-3 text-center">
          <h2 className="mb-4 text-uppercase">
            Calculadora
            <br />
            boletas de honorarios
          </h2>
          <p className="mb-4">
          Cotiza de forma fácil las cifras para tu boleta de honorarios, ingresa la cifra que deseas liquida o bruta y obtén los cálculos 😊
          </p>

          <div className="input-group mb-3">
            <input
              className="form-control"
              type="number"
              placeholder="Ingresa tu cifra"
              onChange={(e) => setMainValue(+e.target.value)}
              value={mainValue}
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
          {liquidInfo}
          {/* Fin respuesta calculos */}
        </div>
      </div>
    </div>
  );
}

export default MainCalculator;
