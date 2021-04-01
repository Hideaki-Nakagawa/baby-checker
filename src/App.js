import './App.css';
import React, { useState } from 'react';
import { AlertDialog, AgeSelect, GenderRadioBtnGroup, WeightInputField, HeightInputField, GoodBtn, BadBtn } from './component/molecules';
import { createMuiTheme, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      //type: 'light',
    }
  })

  const [values, setValues] = useState({
    gender : '',
    age : '',
    height : '',
    weight : '',
  });

  /** @summary show state*/
  const handleChange = (prop) => (data) => {
    console.log(data);
    setValues({ ...values, [prop] : data });
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
            <GenderRadioBtnGroup onChange={handleChange('gender')} />
            <AgeSelect onChange={handleChange('age')} />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <WeightInputField onChange={handleChange('weight')} />
            <HeightInputField onChange={handleChange('height')} />
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
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <AlertDialog 
              content = {values.gender + " " + values.age + " " + values.weight + " " + values.height}
            />
          </Grid>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
