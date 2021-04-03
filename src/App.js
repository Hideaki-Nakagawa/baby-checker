import './App.css';
import React, { useState } from 'react';
import { AlertDialog, AgeSelect, GenderRadioBtnGroup, WeightInputField, HeightInputField, GoodBtn, BadBtn } from './component/molecules';
import { createMuiTheme, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import { BabyGrowUpData } from './dataset';

function App() {
  const theme = createMuiTheme({
    palette: {
      //type: 'dark',
      type: 'light',
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
   * @return 診断結果の文字列を返す
   */
  const diagnose = (props) => {
    const sample = props[0];
    let wRet = sample.wRange[0] <= values.weight && values.weight <= sample.wRange[1] ? 'OK' : 'NG';
    let hRet = sample.hRange[0] <= values.height && values.height <= sample.hRange[1] ? 'OK' : 'NG';
    return (
      <div>
        <div>月齢 : {sample.month} ヵ月</div>
        <br/>
        <div>適正体重 {sample.wRange[0]} - {sample.wRange[1]} kg</div>
        <div>結果 : {wRet} ( {values.weight}kg ) </div>
        <br/>
        <div>適正身長 {sample.hRange[0]} - {sample.hRange[1]} cm</div>
        <div>結果 : {hRet} ( {values.height}cm ) </div>
      </div>
    );
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
            <h2>乳幼児身体発達曲線チェッカー</h2>
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
