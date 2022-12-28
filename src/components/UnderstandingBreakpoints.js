import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

const style = {
  bgcolor: "lightblue",
  border: "2px solid #000",
  boxShadow: 2,
  textAlign: 'center',
  p: 6,
};



const UnderstandingBreakpoints = ()=>(
    <Box marginTop={5} >
        <Grid container spacing={4}>
            {/* xs={12} means 100% */}
            {/* sm={6} means 50% */}
            {/* md={3} means 25% */}
            {/* 
            Set one of the size breakpoint props to "auto" 
            instead of true / a number to size a column based 
            on the natural width of its content.
            xs="auto" sm="auto" md="auto" */}
            <Grid item xs={12} sm={6} md={3}>
                <Paper sx={style}>xs=12 sm=6 md=3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper sx={style}>xs=12 sm=6 md=3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper sx={style}>xs=12 sm=6 md=3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper sx={style}>xs=12 sm=6 md=3</Paper>
            </Grid>
        </Grid>
    </Box>
    
)
export default UnderstandingBreakpoints;