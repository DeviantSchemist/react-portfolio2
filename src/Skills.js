import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  skillsTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '18%'
  },
  paperBackground: {
    backgroundColor: '#3E3D3D',
    marginTop: '2%',
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: '15%'
  },
  typo: {
    color: 'white',
    padding: '5%'
  }
}))

const Skills = () => {
  const classes = useStyles()

  return (
    <div id="skillPage">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.skillsTitle}>
            SKILL OVERVIEW
          </Typography>
          <hr width="70%"></hr>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} variant="outlined" className={classes.paperBackground}>
            <Typography variant="h4" gutterBottom className={classes.typo}>
              <Grid container spacing={10} justifyContent="center">
                <Grid item>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Python</li>
                  </ul>
                </Grid>
                <Grid item>
                  <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>GraphQL</li>
                  </ul>
                </Grid>
                <Grid item>
                  <ul>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Typescript</li>
                  </ul>
                </Grid>
                <Grid item>
                  <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Heroku</li>
                  </ul>
                </Grid>
                <Grid item>
                  <ul>
                    <li>ReactJS</li>
                    <li>Material UI</li>
                    <li>GitHub</li>
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

export default Skills