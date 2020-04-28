import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
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
      width: 250,
      height:20
    },
  }),
);