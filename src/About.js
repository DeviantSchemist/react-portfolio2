import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Resume from './Resume.pdf'
import Photo from './ProfessionalPhoto.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  large: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    margin: 'auto'
  },
  gridMargin: {
    marginTop: '3%',
  },
  gridTitle: {
    textAlign: 'center',
    marginBottom: '4%',
    fontWeight: 'bold',
    color: 'white'
  },
  aboutText: {
    marginLeft: '-4%'
  },
  paperBackground: {
    backgroundColor: '#3E3D3D'
  },
  typo: {
    color: 'white',
    padding: '5%'
  }
}));

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} id="aboutPage">
      <Grid container spacing={10} className={classes.gridMargin}>
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom className={classes.gridTitle}>
            MICHAEL NGO
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Avatar alt="Profile Picture" src={Photo} className={classes.large} />
        </Grid>
        <Grid item xs={6} className={classes.aboutText}>
          <Paper elevation={3} variant="outlined" className={classes.paperBackground}>
            <Typography variant="h4" gutterBottom className={classes.typo}>
              <Grid container spacing={10}>
                <Grid item>
                  <p>
                    Experienced Full Stack Web Developer with a strong interest in Cybersecurity.
                    Here, you can see my projects and skillset.
                    Always eager to learn and grow, professionally and personally.
                  </p>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" href={Resume} target="_blank">Resume</Button>
                </Grid>
              </Grid>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default About