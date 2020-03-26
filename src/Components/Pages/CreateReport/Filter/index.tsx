import React from "react"
import { FilterStyle } from "../../../Assets/Styles";


function Filter () {
    return(
        <FilterStyle>
            <h1>Filtrar por:</h1>
            <button>Dta Lançamento</button>
            <button>Dta Vencimento</button>
            <button>CPF</button>
            <button>Nome</button>
            <button>Status</button>
            <button className = "btn-grafico">Acrescentar Gráfico</button>
        </FilterStyle>
    );
}

export default Filter;