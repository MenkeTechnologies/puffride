import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from "@material-ui/core/Avatar";
import puff from './img/puff.png';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Redirect } from "react-router-dom";


function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        PuffRide
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 180,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const Schedule = ({scheduleAction, backToDashboard, state}) => {
  const classes = useStyles();

  const [driver_state, setDriver ] = useState({checked: false});
  const [selectedTime, setSelectedTime] = React.useState('07:30');
  const [selectedStartDate, setSelectedStartDate] = React.useState("2017-05-23");
  const [selectedEndDate, setSelectedEndDate] = React.useState("2017-05-23");
  const [selectedOrigin_Lat, setSelectedOrig_Lat] = React.useState("");
  const [selectedOrigin_Long, setSelectedOrig_Long] = React.useState("");
  const [selectedDest_Lat, setSelectedDest_Lat] = React.useState("");
  const [selectedDest_Long, setSelectedDest_Long] = React.useState("");

  const [selectedDest_State, setSelectedDest] = React.useState({longitude:"",
  latitude:"",});

  const [dow, setDow] = React.useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
  });

  const handleDriverChange = name => event => {
    setDriver({ ...driver_state, [name]: event.target.checked });
  };

  const handleDow = name => event => {
    setDow({ ...dow, [name]: event.target.checked });
  };

  function handleTimeChange(time) {
    setSelectedTime(time);
  }

  function handleStartDateChange(startDate) {
    setSelectedStartDate(startDate);
  }

  function handleEndDateChange(endDate) {
    setSelectedEndDate(endDate);
  }

  function computeDow() {
      var val = 0;
      val = dow.mon * 1 + dow.tue * 2 + dow.wed * 4 + dow.thu * 8 + dow.fri * 16 + dow.sat * 32 + dow.sun * 64;

      return val;
  }

  return state.status === 'dashboard' ? (<Redirect to='/DashBoard'/>): (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="puff" src={puff}/>
        <Typography component="h1" variant="h5">
          Scheduler
        </Typography>
        <FormGroup row>
            <FormControlLabel
                control={
                <Checkbox
                    checked={dow.mon}
                    onChange={handleDow('mon')}
                    value="mon"
                    color="primary"
                />
                }
                label="Mon"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={dow.tue}
                    onChange={handleDow('tue')}
                    value="tue"
                    color="primary"
                />
                }
                label="Tue"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={dow.Wed}
                    onChange={handleDow('Wed')}
                    value="Wed"
                    color="primary"
                />
                }
                label="Wed"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={dow.thu}
                    onChange={handleDow('thu')}
                    value="thu"
                    color="primary"
                />
                }
                label="Thu"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={dow.fri}
                    onChange={handleDow('fri')}
                    value="fri"
                    color="primary"
                />
                }
                label="Fri"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={dow.sat}
                    onChange={handleDow('sat')}
                    value="sat"
                    color="primary"
                />
                }
                label="Sat"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={dow.sun}
                    onChange={handleDow('sun')}
                    value="sun"
                    color="primary"
                />
                }
                label="Sun"
            />
            {/* <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                label="Custom icon"
            />
            <FormControlLabel
                control={
                <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    value="checkedI"
                />
                }
                label="Custom size"
            /> */}
        </FormGroup>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm = {6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Origin"
                label="Origin Latitude"
                name="Origin Latitude"
                value={selectedOrigin_Lat}
                onChange={(event) => setSelectedOrig_Lat(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm = {6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Origin"
                label="Origin Longitude"
                name="Origin Longitude"
                value={selectedOrigin_Long}
                onChange={(event) => setSelectedOrig_Long(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm = {6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Origin"
                label="Destination Latitude"
                name="Destination Latitude"
                value={selectedDest_Lat}
                onChange={(event) => setSelectedDest_Lat(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm = {6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Destination"
                label="Destination Longitude"
                name="Destination Longitude"
                value={selectedDest_Long}
                onChange={(event) => setSelectedDest_Long(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="time"
                    label="Start Time"
                    type="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
            </Grid>
            <Grid item xs={12} sm = {6}>
                <TextField
                    id="date"
                    label="Start Date"
                    type="date"
                    value={selectedStartDate}
                    onChange={setSelectedStartDate}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm = {6}>
                <TextField
                    id="date"
                    label="End Date"
                    type="date"
                    value={selectedEndDate}
                    onChange={setSelectedEndDate}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm = {6}>
                {/* Need to connect this to DB */}
                <FormControlLabel
                    control={
                    <Checkbox checked={driver_state.checked} onChange={handleDriverChange('checked')} value="checked" />
                    }
                    label="Driver?"
                />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>{ backToDashboard(e, state.user_info[0].user, state.user_info[0].email, computeDow(), selectedOrigin_Lat, selectedOrigin_Long, selectedDest_Lat, selectedDest_Long, selectedTime, selectedStartDate, selectedEndDate, driver_state)}}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}  