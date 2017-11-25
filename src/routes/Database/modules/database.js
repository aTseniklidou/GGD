// ------------------------------------
// Constants
// ------------------------------------

import _ from 'lodash'

export const UPDATE_FILTER = 'UPDATE_FILTER'
export const RESET_FILTERS = 'RESET_FILTERS'
export const CHANGE_VIEW = 'CHANGE_VIEW'
export const UPDATE_DATA = 'UPDATE_DATA'
export const INITIAL_DATA = 'INITIAL_DATA'
export const INITIAL_STATE = 'INITIAL_STATE'
// ------------------------------------
// Actions
// ------------------------------------
export function initializeData (type, data) {
  return {
    type    : INITIAL_DATA,
    payload : { type, data },
  }
}

export function initializeState () {
  return {
    type    : INITIAL_STATE,
    payload : {},
  }
}

export function updateData (sortBy, value) {
  return {
    type    : UPDATE_DATA,
    payload : { sortBy, value },
  }
}
export function updateFilter (category, subcategory = '', value = '') {
  return {
    type    : UPDATE_FILTER,
    payload : { category, subcategory, value },
  }
}
export function resetAllFilters (category) {
  return {
    type    : RESET_FILTERS,
    payload : { category },
  }
}
export function changeView (view) {
  return {
    type    : CHANGE_VIEW,
    payload : { view },
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
  updateFilter,
  resetAllFilters,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_FILTER] : (state, action) =>
    action.payload.subcategory ? ({
      ...state,
      filters: {
        ...state.filters,
        main: action.payload.category || state.filters.main,
        [action.payload.category] : {
          ...state.filters[action.payload.category],
          [action.payload.subcategory]: action.payload.value || state.filters[action.payload.category][action.payload.subcategory],
        }
      },
    }) : ({
      ...state,
      filters: {
        ...state.filters,
        main: action.payload.category || state.filters.main,
      },
    }),
  [RESET_FILTERS] : (state, action) => ({
    ...state,
    filters: {
      ...state.filters,
      [action.payload.category] : initialState.filters[action.payload.category],
    },
    currentData: state.data[action.payload.category],
  }),
  [CHANGE_VIEW] : (state, action) => ({
    ...state,
    view: action.payload.view,
  }),
  [UPDATE_DATA] : (state, action) => {
    return ({
      ...state,
      currentData: state.data[action.payload.sortBy]
        .filter(d => _.difference(_.flattenDeep(Object.values(state.filters[action.payload.sortBy])), d.tags).length === 0)
        .filter(d => ((d.name).toLowerCase()).includes(action.payload.value)),
    })
  },
  [INITIAL_DATA] : (state, action) => ({
    ...state,
    data: {
      ...state.data,
      [action.payload.type]: action.payload.data,
    },
    currentData: state.filters.main === action.payload.type ? action.payload.data : state.currentData,
  }),
  [INITIAL_STATE] : (state, action) => initialState,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  view: 'grid',
  data: {
    companies: [],
    games: [],
    assets: [],
    people: [],
  },
  currentData: null,
  filters: {
    main: 'companies',
    companies: {
      status: [],
      role: [],
    },
    games: {
      platforms: [], // ios, windows, steam, etc..
      genre: [], // platform. rpg, idle, action, puzzle,etc..
      status: [], // released, under development, stopped,etc..
      style: [], // 3D, 2D, VR, etc..
      mode: [],
    },
    assets: {
      status: [], // released, under development, stopped,etc..
      price: [],
      category: [],

    },
  },
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}