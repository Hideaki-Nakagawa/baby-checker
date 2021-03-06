import React, { useState } from 'react';
import { createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';

/** @summary style define*/
const useStyles = makeStyles((theme) =>
    createStyles({
        "formControl": {
            margin: theme.spacing(1),
            minWidth: 120,
        }
    }),
);

/** @summary 月齢選択 コンポーネント */
const AgeSelect = (props) => {

    /** @summary state hook */
    const [myAge, setAge] = useState('');

    /** 
     * @summary state change 
     * @details ステートを変更して、親要素に値を投げる
     */
    const handleChange = (event) => {
        const newValue = event.target.value;
        setAge(newValue);
        if (props.onChange) {
            props.onChange(newValue);
        }
    };

    /** @summary style hook api */
    const classes = useStyles();

    /** @summary 月齢の選択肢を作成 */
    const makeMonthItems = () => {
        const items = [];
        for (let month = 1; month <= 24; month++) {
            items.push(<MenuItem key={month} value={month}>{month}ヵ月</MenuItem>)
        }
        return items;
    }

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <InputLabel id="age_select_label">月齢</InputLabel>
            <Select
                labelId="age_select_label"
                id="age_select"
                value={myAge}
                onChange={handleChange}
                variant="standard"
            >
                {makeMonthItems()}
            </Select>
        </FormControl>
    );
}
export default AgeSelect;