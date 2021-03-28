import logo from './logo.svg';
import './App.css';
import GoodBtn from './component/atoms/GoodBtn.jsx';
import BadBtn from './component/atoms/BadBtn.jsx';
import GenderRadioBtnGroup from './component/molecules/GenderRadioBtnGroup.jsx';
import { createMuiTheme, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import AgeSelect from './component/molecules/AgeSelect';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      //type: 'light',
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <body>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <GenderRadioBtnGroup />
            <AgeSelect />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <GoodBtn />
            <BadBtn />
          </Grid>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
