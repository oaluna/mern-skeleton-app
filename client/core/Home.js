import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import unicornbikeImg from "./../assets/images/unicornbike.jpg";
import pink from "@material-ui/core/colors/pink"

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  credit: {
    padding: 10,
    textAlign: "right",
    backgroundColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderBottom: "1px solid #d0d0d0",
    "& a": {
      color: "#3f4771",
    },
    root: {
      color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      height: 48,
      padding: '0 30px',
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={unicornbikeImg}
          title="Unicorn Bicycle"
        />
      <CardContent>
        <Typography variant="h3" component="h3" gutterBottom>
       <h3 className={classes.root}>by Oscar Luna</h3>
      </Typography>
        </CardContent>
      </Card>
    </>
  );
}
