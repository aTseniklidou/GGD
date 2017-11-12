import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
} from 'material-ui'
import './Home.scss'
import {
  Polls,
  Calendar,
} from './components'
import {
//  Label,
} from 'static/icons'

class Home extends Component {
  constructor (props: Home.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    const { setCalendarEvents, events } = this.props
    return (
  <div className='homecontainer'>

    <div className='title'>
      <div className='welcome' style={{ backgroundImage: 'url(signpost.png)' }}>
      <Typography type='Title' component='h3' style={{ textAlign: 'center', maxWidth: '200px' }}>
        Welcome to the GGD database!
      </Typography>
      </div>
      <Typography type='headline' component='h4' style={{ textAlign: 'left' }}>
        Here you can find all sorts of information about the greek game development scene.
      </Typography>
    </div>
    <Calendar
      events={events}
      setCalendarEvents={setCalendarEvents}
    />
    <Polls />
  </div>

)
}}
Home.propTypes = {
}

export default Home
