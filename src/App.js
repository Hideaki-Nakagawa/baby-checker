import './App.css';
import { AgeSelect, GenderRadioBtnGroup, WeightInputField, HeightInputField, GoodBtn, BadBtn } from './component/molecules';
import { createMuiTheme, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';

function App() {
  const theme = createMuiTheme({
    palette: {
      //type: 'dark',
      type: 'light',
    }
  })

  /** @summary show state*/
  const handleChange = (data) => {
    console.log(data);
  }

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
              <WeightInputField onChange={handleChange} />
              <HeightInputField onChange={handleChange} />
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
