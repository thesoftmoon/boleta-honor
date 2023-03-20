function MainCalculator() {
  return (
    <div className="row d-flex justify-content-center align-items-center content">

      <div className="col-12 col-md-8">
        <div class="card px-3 px-md-5 pt-3 text-center">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Ingresa tu cifra"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
            >
              Calcular
            </button>
          </div>
            {/* Respuesta calculos */}
            
            <h4>Liquido</h4>
            <h4>Bruto</h4>

            {/* Fin respuesta calculos */}
        </div>
      </div>
    </div>
  );
}

export default MainCalculator;
