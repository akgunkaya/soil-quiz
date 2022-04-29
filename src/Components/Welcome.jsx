import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';



function Welcome(props) {
    const [elevation, setElevation] = useState(1);

    function onHoverHandler(event) {
        event.type === 'mouseenter' ?
            setElevation(5)
            :
            setElevation(2)
    }
    return (
        <Card sx={{ display: 'flex' }}
            elevation={elevation}
            onMouseEnter={onHoverHandler}
            onMouseLeave={onHoverHandler}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        #SaveSoil Training to Learn How to Talk about Soil
                    </Typography>
                    <br />
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Save Soil is a global movement launched by Sadhguru, to address the soil crisis by bringing together people from around the world to stand up for Soil Health, and supporting leaders of all nations to institute national policies and actions toward increasing the organic content in cultivable Soil.
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                    <Button onClick={props.setStartQuiz} variant="contained">Start Learning</Button>
                </CardContent>
            </Box>

        </Card>
    );
}
export default Welcome
