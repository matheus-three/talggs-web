import React, { Fragment } from 'react'
import { InputDateStyle, TopBarStyle } from '../../../Assets/StylesMainHistory';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 170,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

function TopBar () {
  const classes = useStyles();
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value as string);
  };
  return (
      <Fragment>
      
      <TopBarStyle> 
      <span>Filtro</span>   
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={handleChange}
        >
          <MenuItem value={10}>Pago</MenuItem>
          <MenuItem value={20}>Pendente</MenuItem>
          <MenuItem value={30}>Vencidas</MenuItem>
        </Select>
      </FormControl>
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