import React from 'react';
import Map from './map';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import JSONTree from 'react-json-tree'


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {makeStyles} from "@material-ui/core";



function initMap() {
    var directionsService = new window.google.maps.DirectionsService;
    var directionsDisplay = new window.google.maps.DirectionsRenderer;
    var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    }
}));



export const Ride = ({state}) => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Details for Selected Schedule
                    </Typography>
                </Container>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Map
                        id="myMap"
                        options={{
                            center: {lat: 42.2808, lng: -83.7430},
                            zoom: 12
                        }}
                        onMapLoad={map => {
                            const DirectionsService = new window.google.maps.DirectionsService();
                            var directionsDisplay = new window.google.maps.DirectionsRenderer();
                            DirectionsService.route({
                                origin: new window.google.maps.LatLng(42.2411499, -83.6129939),
                                destination: new window.google.maps.LatLng(42.2808, -83.7430),
                                travelMode: window.google.maps.TravelMode.DRIVING,
                            }, (result, status) => {
                                if (status === window.google.maps.DirectionsStatus.OK) {
                                    console.log(result)
                                    directionsDisplay.setMap(map);
                                    directionsDisplay.setDirections(result);
                                } else {
                                    console.error(`error fetching directions ${result}`);
                                }
                            });
                            var marker = new window.google.maps.Marker({
                                position: {lat: 42.2808, lng: -83.7430},
                                map: map,
                                title: 'Hello Istanbul!'
                            });

                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Container maxWidth ="sm">
                                <Typography style={{"font-size": "2.5rem"}} component="h5" variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Rides
                                </Typography>
                            </Container>
                        </Grid>
                        <Button to="/SignUp" variant="contained" color="primary">
                            Cancel Schedule
                        </Button>
                        {
                            state.ride.map((item,idx)=>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <JSONTree data={item}/>
                                    </Paper>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Container maxWidth ="sm">
                                <Typography style={{"font-size": "2.5rem"}} component="h5" variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Matching Ride Schedules
                                </Typography>
                            </Container>
                        </Grid>
                        {
                            state.ride.map((item,idx)=>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <JSONTree data={item}/>
                                    </Paper>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}