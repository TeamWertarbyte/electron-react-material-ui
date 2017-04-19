import * as TYPES from './actionTypes'

export function toggleMenu (open) {
  return {type: TYPES.MENU_TOGGLE, open}
}
export function toggleSnackbar (message) {
  return {type: TYPES.SNACKBAR_TOGGLE, message}
}
export function setResponsiveBreakpoint (value) {
  return {type: TYPES.SET_RESPONSIVE_BREAKPOINT, value}
}
export function setMenuIndex (index) {
  return {type: TYPES.SET_MENU_INDEX, index}
}
