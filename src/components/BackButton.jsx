import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();
  
  const goBack = () => {
    history.goBack(); // Go back to the previous page
  };
  
  return (
    <a href="#" onClick={goBack}>{"< Back"}</a>
  );
};

export default BackButton;
