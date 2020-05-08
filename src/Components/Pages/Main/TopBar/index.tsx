import React, { Fragment } from 'react'
import { TopBarStyle, InputDateStyle } from '../../../Assets/styled-components/StylesMainHistory';
import 'date-fns';
import { useContext } from 'react';
import { FilterContext } from '../../../ContextApi/ContextFilterState';
import { useStyles } from '../../../Assets/useStyles/StylesTopBar';


{/*import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';*/}

function TopBar () {
  const classes = useStyles();
  const {filterMain,mainFilter} = useContext(FilterContext)
  
  {/*const handleChange = (e) => {
      filterMain(e.target.value,e.target.name)
  };*/}

  
  return (
      <Fragment>
   
        <TopBarStyle>
          <div>
            <label>Status:</label>
              <select>
                <option>Status</option>
                <option>Pendente</option>
                <option>Pago</option>
              </select>
          </div>   


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