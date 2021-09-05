import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import firebase from 'firebase';

interface Iprops {
  open: boolean;
  close: () => void;
  redirect: (value: boolean) => void
}
export default function FormDialog(props: Iprops) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("")
  useEffect(() => {
    setOpen(props.open);

  },[props.open])
  
  const handleClose = () => {
    setOpen(false);
    props.close()
  };

  const handleSend = () => {
    setOpen(false)
    const dbh = firebase.firestore()
    dbh.collection('pre-register').get()
    .then((res) => {
      res.forEach((reg) => {
        console.log("a",reg.data().codeAcess)
        console.log("b",value)
        if(reg.data().codeAcess === value){
          props.redirect(true)
        }else {
          props.redirect(false)
        }
      })
    })
    props.close()
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cadastro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Digite o código de Acesso enviado ao seu email para prosseguir
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Código de Acesso"
            type="string"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSend} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
