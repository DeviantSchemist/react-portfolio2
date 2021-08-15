import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
  },
  appbarColor: {
    backgroundColor: '#3E3D3D'
  }
}))

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbarColor}>
        <Toolbar>
          <Button color="inherit">About</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar