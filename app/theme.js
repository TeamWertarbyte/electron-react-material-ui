import {
  blueGrey500,
  blueGrey700,
  cyan500,
  fullBlack,
  grey300,
  grey400,
  grey900,
  orange500,
  orange700,
  white
} from 'material-ui/styles/colors'

import Spacing from 'material-ui/styles/spacing'
import { fade } from 'material-ui/utils/colorManipulator'

export default {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    primary3Color: blueGrey700,
    accent1Color: orange500,
    accent2Color: orange700,
    accent3Color: orange700,
    textColor: grey900,
    alternateTextColor: grey300,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(grey900, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(grey900, 0.07),
    shadowColor: fullBlack
  }
}
