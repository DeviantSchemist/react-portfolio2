import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  cards: {
    maxWidth: 345,
    backgroundColor: '#3E3D3D',
    color: 'white'
  },
  cardMargin: {
    marginTop: '2%'
  },
  projectTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '18%'
  },
  buttonColor: {
    color: '#80aaff'
  }
}))

const Projects = () => {
  const classes = useStyles()

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.projectTitle}>
            PROJECTS
          </Typography>
          <hr width="70%"></hr>
        </Grid>
        <Grid item xs={12} className={classes.cardMargin}>
          <Grid container spacing={10} justifyContent="center">
            <Grid item>
              <Card className={classes.cards}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" className={classes.buttonColor}>
                    Share
                  </Button>
                  <Button size="small" className={classes.buttonColor}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.cards}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" className={classes.buttonColor}>
                    Share
                  </Button>
                  <Button size="small" className={classes.buttonColor}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.cards}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" className={classes.buttonColor}>
                    Share
                  </Button>
                  <Button size="small" className={classes.buttonColor}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.cardMargin}>
          <Grid container spacing={10} justifyContent="center">
            <Grid item>
              <Card className={classes.cards}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" className={classes.buttonColor}>
                    Share
                  </Button>
                  <Button size="small" className={classes.buttonColor}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.cards}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" className={classes.buttonColor}>
                    Share
                  </Button>
                  <Button size="small" className={classes.buttonColor}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.cards}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" className={classes.buttonColor}>
                    Share
                  </Button>
                  <Button size="small" className={classes.buttonColor}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Projects