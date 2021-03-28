import React, { useState } from 'react';
import { createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        "formControl": {
            margin: theme.spacing(1),
            minWidth: 120,
        }
    }),
);

/**
 * @summary 月齢選択 コンポーネント
 */
const AgeSelect = () => {

    /** @summary state hook */
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    /** @summary style hook api */
    const classes = useStyles();

    /** @summary 月齢の選択肢を作成 */
    const makeMonthItems = () => {
        const items = [];
        for (let month = 1; month <= 24; month++) {
            items.push(<MenuItem value={month}>{month}ヵ月</MenuItem>)
        }
        return items;
    }

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <InputLabel id="age_select_label">月齢</InputLabel>
            <Select
                labelId="age_select_label"
                id="age_select"
                value={age}
                onChange={handleChange}
            >
                {makeMonthItems()}
            </Select>
        </FormControl>
    );
}
export default AgeSelect;