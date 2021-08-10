import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Poodle from './Poodle.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
}));

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar alt="Poodle" src={Poodle} className={classes.large} />
    </div>
  )
}

export default About