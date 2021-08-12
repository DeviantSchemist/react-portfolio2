import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Poodle from './Poodle.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    color: 'white'
  },
  large: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    margin: 'auto'
  },
  gridMargin: {
    marginTop: '6%'
  }
}));

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.gridMargin}>
        <Grid item xs={6}>
          <Avatar alt="Poodle" src={Poodle} className={classes.large} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            My name is Michael Ngo, aspiring full stack web developer. Here, you can see a variety of projects
            that I have worked on.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default About