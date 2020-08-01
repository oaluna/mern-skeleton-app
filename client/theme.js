import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#1a00a1',
      main: '#001b2e',
      dark: '#140f2d',
      contrastText: '#e5f2c9'
    },
    secondary: {
      light: '#e89005',
      main: '#ec7505',
      dark: '#d84a05',
      contrastText: '#1f0318'
    },
    openTitle: blueGrey['400'],
    protectedTitle: pink['400'],
    type: 'light'
  }
})

export default theme
