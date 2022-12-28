import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TextButtons() {
/*
    Text buttons are typically used for less-pronounced actions, 
    including those located: in dialogs, in cards. 
    In cards, text buttons help maintain an emphasis on 
    card content.
*/
  return (
    <Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
  );
}