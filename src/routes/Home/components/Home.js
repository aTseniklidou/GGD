import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Home.scss'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Icon from 'material-ui/Icon';
import AddBox from 'material-ui-icons/AddBox';
import IndeterminateCheckBox from 'material-ui-icons/IndeterminateCheckBox';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/AddBox';

import Badge from 'material-ui/Badge';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import data from './content.js';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Popover from 'material-ui/Popover';

class Home extends Component {
  constructor(props: Home.propTypes) {
    super(props);
    this.state = {
      filter: 'companies',
    };
  }
  handleCheckbox = name => (event, checked) => {
    this.setState({ [name]: checked })
  };
  enableFilter = (category) => {
      this.setState({
        filter: category,
      })
  }

  handleCustom = (e) => {
    if (e.target.value > 0){
    this.setState({ customdie: e.target.value })
  }
  }
  render() {

    return (
  <div>
    <Paper style={{height: '100%', padding: '20px 20px 80px'}} elevation={2}>

      <div className='filters'>
        <Chip className='chip' label='sort by company' onClick={() => this.enableFilter('companies')} />
        <Chip className='chip' label='sort by game' onClick={() => this.enableFilter('games')} />
      </div>
      <div className='contentContainer'>
      {this.state.filter === 'companies' && data.map(item => (
              <div className="flip-container" onClick="this.classList.toggle('active');">
        <div className="flipper">
      		<div className="front">
        <Card className='cardContainer' >
      <CardContent>
      <div className='header'>
          <Typography type="Title" component="h4">
            {item.company.name}
          </Typography>
      </div>
      </CardContent>
      <CardActions style={{flexWrap:'wrap', minHeight: '52px', height: 'auto'}}>
      {item.games.map(game => (
        <Button target="_blank" href={game.website} dense color="primary">
          {game.name}
        </Button>
      ))}
      </CardActions>
      <div className='year'>
      <Typography type='body2' component='h2'>
        {item.company.founded}
      </Typography>
      </div>
    </Card>
    </div>
    <div clasNames="back">
    <Card className='cardContainer' >
  <CardContent>
  <div className='header'>
      <Typography type="Title" component="h4">
        {item.company.name}
      </Typography>
  </div>
  </CardContent>
  <CardActions style={{flexWrap:'wrap', minHeight: '52px', height: 'auto'}}>
  {item.games.map(game => (
    <Button target="_blank" href={game.website} dense color="primary">
      {game.name}
    </Button>
  ))}
  </CardActions>
  <div className='year'>
  <Typography type='body2' component='h2'>
    {item.company.founded}
  </Typography>
  </div>
</Card>
		</div>
  </div>
  </div>
      ))}
      </div>




      {this.state.filter === 'games' && data.map(item =>
        (item.games.length > 0 && item.games.map(game => (
        <Card className='cardContainer' >
      <CardMedia
        image=""
      />
      <CardContent>
      <div className='header'>
        <Typography type="Title" component="h3">
          {game.name}
        </Typography>
      </div>
      </CardContent>
      <CardActions>
      <Button dense color="primary">
        {item.company.name}
      </Button>
      </CardActions>
    </Card>
  )))
)}
    </Paper>
  </div>
)
}
}
Home.propTypes = {
  dice: PropTypes.array.isRequired,
  result: PropTypes.array.isRequired,
  roll: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

export default Home
