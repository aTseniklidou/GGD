import { connect } from 'react-redux'
import {
  updateFilter,
  resetAllFilters,
  changeView,
  updateData,
  initializeData,
} from '../modules/videogames'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import VideoGames from '../components/VideoGames'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  updateFilter : (category, subcategory, value) => updateFilter(category, subcategory, value),
  resetAllFilters: (category) => resetAllFilters(category),
  changeView: (view) => changeView(view),
  updateData: (sortBy, filters) => updateData(sortBy, filters),
  initializeData: (type, data) => initializeData(type, data),
}

const mapStateToProps = (state) => {
  return ({
    filters: state.videogames.filters,
    view: state.videogames.view,
    currentData: state.videogames.currentData,
  })
}

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(VideoGames)