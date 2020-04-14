import React, { Fragment } from 'react'
import { InputDateStyle, TopBarStyle } from '../../../Assets/StylesMainHistory';


function TopBar () {
  return (
      <Fragment>
      <span>Filtro</span>
      <TopBarStyle>    
        <label>Status:</label>
          <select>
            <option>Status</option>
            <option>Pendente</option>
            <option>Pago</option>
          </select> 
       <InputDateStyle>
      
        <div>
          <label>Lançamento</label>
          <input type = "date"></input>
          <label>até</label>
          <input type = "date"></input>
        </div>
        <div>
          <label>Vencimento</label>
          <input type = "date"></input>
          <label>até</label>
          <input type = "date"></input>
        </div>
        </InputDateStyle>
      </TopBarStyle> 
      </Fragment>
      
  );
}

export default TopBar; 