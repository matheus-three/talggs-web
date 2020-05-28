import React, { Fragment } from 'react'
import { TopBarStyle, InputDateStyle } from '../../../Assets/styled-components/StylesMainHistory';
import 'date-fns';
import { useContext } from 'react';
import { FilterContext } from '../../../ContextApi/ContextFilterState';
import moment from 'moment';


// {/*import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import TextField from '@material-ui/core/TextField';*/}

function TopBar () {
  const {filterMain,mainFilter} = useContext(FilterContext)
  
  const handleChange = (e) => {
      if(e.target.name !== "1"){
        const data = moment(e.target.value).format('DD/MM/YYYY')
        filterMain(data,e.target.name)
      }else {
        filterMain(e.target.value,e.target.name)
    }
      }
      
  return (
      <Fragment>
   
        <TopBarStyle>
          <div>
            <label>Status:</label>
              <select name = "1" onChange = {handleChange}>
                <option>Todas</option>
                <option>Vencido</option>
                <option>Pendente</option>
                <option>Pago</option>
              </select>
          </div>   


        <InputDateStyle>
          <div>
            <label>Lançamento</label>
            <input name = "2" onChange = {handleChange} type = "date" max = {moment(mainFilter.launch.launchFinal).format('YYYY-DD-MM')}></input>
            <label>até</label>
            <input name = "3" onChange = {handleChange} type = "date" min = {moment(mainFilter.launch.launchInit).format('YYYY-DD-MM')}></input>
          </div>
          <div>
            <label>Vencimento</label>
            <input name = "4" onChange = {handleChange}  type = "date"></input>
            <label>até</label>
            <input name = "5" onChange = {handleChange} type = "date"></input>
          </div>
          </InputDateStyle>
        </TopBarStyle> 
      </Fragment>
      
  );
}

export default TopBar; 