import React from 'react';
import {Card, CardTitle, CardMedia} from 'material-ui';



class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    // Track if the mouse hovering over the movie card
    this.state = {
      isMouseOver: false
    };
  }
  
  render() {

    return (
      <div></div>
    );
  }
}

export default MovieCard;