import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  /*
    Contained buttons are high-emphasis, 
    distinguished by their use of elevation and fill. 
    They contain actions that are primary to your app.  
  */
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    </Stack>
  );
}