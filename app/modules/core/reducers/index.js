import * as TYPES from '../actions/actionTypes'

const defaultState = {
  menu: {
    open: true,
    index: -1
  },
  snackBar: {
    open: false,
    message: ''
  },
  responsive: {
    mobile: false,
    tablet: false,
    desktop: true
  }
}

function toggleMenu (state, action) {
  return {
    ...state,
    menu: {
      ...state.menu,
      open: typeof action.open === 'undefined' ? !state.menu.open : action.open
    }
  }
}

function setMenuIndex (state, action) {
  return {
    ...state,
    menu: {
      ...state.menu,
      index: action.index
    }
  }
}

function toggleSnackBar (state, action) {
  return {
    ...state,
    snackBar: {
      open: typeof action.open === 'undefined' ? !state.snackBar.open : action.open,
      message: typeof action.message === 'undefined' ? '' : action.message
    }
  }
}

function setResponsiveBreakpoint (state, action) {
  return {
    ...state,
    responsive: {
      mobile: action.value <= 768,
      tablet: action.value > 768 && action.value <= 1200,
      desktop: action.value > 1200
    }
  }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case TYPES.MENU_TOGGLE:
      return toggleMenu(state, action)
    case TYPES.SNACKBAR_TOGGLE:
      return toggleSnackBar(state, action)
    case TYPES.SET_RESPONSIVE_BREAKPOINT:
      return setResponsiveBreakpoint(state, action)
    case TYPES.SET_MENU_INDEX:
      return setMenuIndex(state, action)
    default:
      return state
  }
}
