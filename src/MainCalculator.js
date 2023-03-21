import {useState} from 'react';

function MainCalculator() {

  const [mainValue, setMainValue] = useState('');
  const [total, setTotal] = useState();

  // descuento actual es 13%

  const descuento = 0.13;

  const calculateValue = ()=>{
    setTotal(mainValue + (mainValue * descuento));
    setMainValue('');
  }



  return (
    <div className="row d-flex justify-content-center align-items-center content">

      <div className="col-12 col-md-8">
        <div className="card px-3 px-md-5 pt-3 text-center">
          <div className="input-group mb-3">
            <input
              className="form-control"
              type='number'
              placeholder="Ingresa tu cifra"
              onChange={(e)=>setMainValue(+e.target.value)}
              value={mainValue}
              
            />
            
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={calculateValue}
            >
              Calcular
            </button>
          </div>
            {/* Respuesta calculos */}
            
            <h4>Liquido</h4>
            <h4>Bruto</h4>
            <p>{mainValue}</p>
            <p>{total}</p>

            {/* Fin respuesta calculos */}
        </div>
      </div>
    </div>
  );
}

export default MainCalculator;
