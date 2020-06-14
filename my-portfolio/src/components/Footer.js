import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    const website = window.location.origin
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        {website}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const github = useContext(HomeContext);

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            <div>Follow me on Github @<a href={github.html_url}>{github.login}</a></div>
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

