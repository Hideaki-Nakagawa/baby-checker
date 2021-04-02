import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const AlertDialog = (props) => {
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('');

    const handleClickOpen = () => {
      const result = props.onClick();
      setResult(result);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          診断
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"診断結果"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {result}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              閉じる
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
};

export default AlertDialog;