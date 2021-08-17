import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(() => ({
  contactTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '18%'
  },
  paperBackground: {
    backgroundColor: '#3E3D3D',
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%'
  },
  typo: {
    color: 'white',
    padding: '5%'
  }
}))

const Contact = () => {
  const classes = useStyles()

  return (
    <div id="contactPage">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.contactTitle}>
            CONTACT
          </Typography>
          <hr width="70%"></hr>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} variant="outlined" className={classes.paperBackground}>
            <Typography variant="h4" gutterBottom className={classes.typo}>
              <Grid container spacing={10} justifyContent="center">
                <Grid item>
                  <ul>
                    <li><GitHubIcon /> Github</li>
                  </ul>
                </Grid>
                <Grid item>
                  <ul>
                    <li><LinkedInIcon /> LinkedIn</li>
                  </ul>
                </Grid>
                <Grid item>
                  <ul>
                    <li><FacebookIcon /> Facebook</li>
                  </ul>
                </Grid>
                <Grid item>
                  <ul>
                    <li><EmailIcon /> placeholder@gmail.com</li>
                  </ul>
                </Grid>
              </Grid>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact