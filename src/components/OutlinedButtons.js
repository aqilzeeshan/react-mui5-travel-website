import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons() {
  /*
    Outlined buttons are medium-emphasis buttons. 
    They contain actions that are important but aren't 
    the primary action in an app.

    Outlined buttons are also a lower emphasis alternative 
    to contained buttons, or a higher emphasis alternative 
    to text buttons.
  */
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
      <Button variant="outlined"
        onClick={() => {
            alert('clicked');
        }}      
      >Click me</Button>
    </Stack>
  );
}