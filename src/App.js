import logo from './logo.svg';
import './App.css';
import GoodBtn from './component/atoms/GoodBtn';
import BadBtn from './component/atoms/BadBtn';
import GenderRadioBtnGroup from './component/molecules/GenderRadioBtnGroup';
import { createMuiTheme, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import AgeSelect from './component/molecules/AgeSelect';
import WeightInputField from './component/molecules/WeightInputField';
import HeightInputField from './component/molecules/HeightInputField';

function App() {
  const theme = createMuiTheme({
    palette: {
      //type: 'dark',
      type: 'light',
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
            <WeightInputField />
            <HeightInputField />
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
