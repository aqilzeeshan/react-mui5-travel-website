import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import {AccessTime} from "@mui/icons-material"
import {createTheme, ThemeProvider} from "@mui/material"

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props:{
                        variant:"body2"
                    },
                    style:{
                        fontSize:11,
                        //backgroundColor:"blue",
                    },
                },
                {
                    props:{
                        variant:"body3"
                    },
                    style:{
                        fontSize:9,
                    },
                },
            ],
        },
    },
})

const TourCard = ({tour})=>{
    return <Grid item xs={3}>
                <ThemeProvider theme={theme}>
                    <Paper elevation={3}>
                        <img 
                            src={tour.image}
                            alt=""
                            className="img"
                        />
                        <Box paddingX={1}>
                            <Typography variant="subtitle1" component="h2">
                                {tour.name}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <AccessTime sx={{width:12.5}}/>
                                <Typography variant="body2" component="p" marginLeft={0.5}>
                                    {tour.duration}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                                marginTop={3}                        
                            >
                                <Rating 
                                    name="read-only" 
                                    value={tour.rating}
                                    precision={0.5} 
                                    readOnly
                                    size="small"
                                />
                                <Typography variant="body2" component="p" marginLeft={0.5}>
                                    {tour.rating}
                                </Typography>
                                <Typography variant="body2" component="p" marginLeft={0.5}>
                                    ({tour.numberOfReviews} reviews)
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" component="h3" marginTop={0}>
                                    From C ${tour.price}
                                </Typography>                            
                            </Box>
                        </Box>

                    </Paper>
                </ThemeProvider>
    </Grid>
}

export default TourCard