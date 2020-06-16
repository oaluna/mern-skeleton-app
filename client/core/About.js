import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Person from '@material-ui/icons/Person'
import {Redirect, Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
      maxWidth: 600,
      margin: 'auto',
      padding: theme.spacing(3),
      marginTop: theme.spacing(5)
    }),
    title: {
      marginTop: theme.spacing(3),
      color: theme.palette.protectedTitle
    }
  }))

  export default function About() {
      const classes = useStyles()

      return (
        <Paper className={classes.root} elevation={4}>
          <Typography variant="h2" className={classes.title}>
            About the Site Creator
          </Typography>
                <Avatar>
                  <Person/>
                </Avatar>
          <Typography variant="h4" className={classes.title}>
              Oscar Armando Luna is a ReactJS developer from San Francisco, CA. Check out his other work
              <a href="http://oscarluna.netlify.app">here</a>.
          </Typography>
        </Paper>
      )
      
  }