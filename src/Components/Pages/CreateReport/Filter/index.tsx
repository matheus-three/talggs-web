import React from "react"
import { FilterStyle } from "../../../Assets/Styles";


function Filter () {
    return(
        <FilterStyle>
            <span>Filtrar por:</span>
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