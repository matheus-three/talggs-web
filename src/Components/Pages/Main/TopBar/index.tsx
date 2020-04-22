import React, { Fragment } from 'react'
import { InputDateStyle, TopBarStyle } from '../../../Assets/StylesMainHistory';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import 'date-fns';
import { useContext } from 'react';
import { FilterContext } from '../../../ContextApi/ContextFilterState';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 170,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
      width: 200,
      height:20
    },
  }),
);

function TopBar () {
  const classes = useStyles();
  const {filterMain,mainFilter} = useContext(FilterContext)
  
  const handleChange = (e) => {
      filterMain(e.target.value,e.target.name)
  };

  
  return (
      <Fragment>
      <TopBarStyle> 
        <span>Filtro</span>   
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          name = "1"
          defaultValue = "todas"
          onChange={handleChange}
        >
          <MenuItem value="todas">Todas</MenuItem>
          <MenuItem value="Pago">Pago</MenuItem>
          <MenuItem value="Pendente">Pendente</MenuItem>
          <MenuItem value="Vencido">Vencidas</MenuItem>
        </Select>
      </FormControl>
      
        <div>
          <form className={classes.container} noValidate>
            <TextField
              name="2"
              label="Lancamento"
              type="date"
              defaultValue= "2020-01-01"
              className={classes.textField}
              onChange = {handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="3"
              label="ate"
              type="date"
              defaultValue= "2020-01-01"
              className={classes.textField}
              onChange = {handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
             <TextField
              name="4"
              label="Vencimento"
              type="date"
              defaultValue= "2020-01-01"
              className={classes.textField}
              onChange = {handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="5"
              label="ate"
              type="date"
              defaultValue= "2020-01-01"
              className={classes.textField}
              onChange = {handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
             
    </div>
       
      </TopBarStyle> 
      </Fragment>
      
  );
}

export default TopBar; 