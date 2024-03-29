import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts(props) {
  const [open, setOpen] = React.useState(true);
    const {severity, message} = props;

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Collapse in={open}>
        <Alert severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 3, fontFamily: 'poppins', fontWeight: 'bold' }}
        >
            {message}
          
        </Alert>
      </Collapse>

    </Box>
  );
}