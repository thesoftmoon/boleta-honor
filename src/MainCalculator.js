import { useState } from "react";

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
        Tu valor bruto es de: <strong>${totalGrossValue}</strong> <br /> Tu descuento del 13% es
        de: <strong>${discountGrossValue}</strong>
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

  const grossValue = () => {
    setTotalGrossValue(mainValue + Math.round(mainValue / remainer * discount));
  };

  const liquidValue = () => {
    setTotalLiquidValue(Math.round(mainValue));
  };

  const discountValueCalc = () => {
    setDiscountValue(Math.round(mainValue * discount));
  };

  const grossDiscountValue = ()=>{
    setDiscountGrossValue(Math.round(mainValue / remainer * discount));
  }

  const limiter = (e)=>{
    //e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0,e.target.maxLength);
  }

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
              onInput={limiter}
              maxlength = {10}
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
          {totalInfo === true ? <hr/> : '' }
          {liquidInfo}
          {/* Fin respuesta calculos */}
        </div>
      </div>
    </div>
  );
}

export default MainCalculator;
