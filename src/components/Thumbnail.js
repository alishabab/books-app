import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },

  image: {
    height: '200px',
    objectFit: 'fill',
  },
});

const Thumbnail = ({ book }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          alt={book.volumeInfo.title}
          image={book.volumeInfo.imageLinks.smallThumbnail}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {book.volumeInfo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Thumbnail.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default Thumbnail;
