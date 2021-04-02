import './App.css';
import React, { useState } from 'react';
import { AlertDialog, AgeSelect, GenderRadioBtnGroup, WeightInputField, HeightInputField, GoodBtn, BadBtn } from './component/molecules';
import { createMuiTheme, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import { BabyGrowUpData } from './dataset';

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
    setValues({ ...values, [prop]: data });
  }

  /** 
   * @summary 診断ボタンが押されたときの処理 
   * @details jsonデータから性別、月齢にあったsampleデータを取得して、診断関数をコール
  */
  const handleClick = () => {
    let dataset;
    if (values.gender === 'male') {
      dataset = BabyGrowUpData.male;
    }else if(values.gender === 'female'){
      dataset = BabyGrowUpData.female;
    }else{
      return "null";
    }
    const node = dataset.filter((data, id) => {
      return data.month === values.age;
    });
    return diagnose(node)
  }

  /**
   * @summary 入力された体重と身長が適正か診断する
   * @param {*} props : sampleデータ
   */
  const diagnose = (props) => {
    let ret;
    const sample = props[0];
    sample.wRange[0] <= values.weight && values.weight <= sample.wRange[1] ? ret = 'OK' : ret = 'NG';
    return ret;
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
              onClick={handleClick}
            />
          </Grid>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
