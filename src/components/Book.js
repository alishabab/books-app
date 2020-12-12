import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Book = () => {
  const history = useHistory();
  const goBackHandle = () => {
    history.goBack();
  };
  return (
    <Button onClick={goBackHandle} variant="contained" color="primary">Back</Button>
  );
};

export default Book;
