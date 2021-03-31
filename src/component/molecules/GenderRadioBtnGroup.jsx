import React, { useState } from 'react';
import { makeStyles, createStyles, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

/** @summary style define*/
const useStyles = makeStyles((theme) =>
    createStyles({
        "formControl": {
            margin: theme.spacing(1),
        }
    }),
);

/** @summary 性別選択のラジオボタン コンポーネント */
const GenderRadioBtnGroup = (props) => {

    /** @summary state hook */
    const [myGender, setGender] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setGender(newValue);
        if (props.onChange) {
            props.onChange(newValue);
        }
    };

    /** @summary style hook api */
    const classes = useStyles();

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">性別</FormLabel>
            <RadioGroup aria-label="gender" name="gender" value={myGender} onChange={handleChange}>
                <FormControlLabel value="male" control={<Radio />} label="おとこの子" />
                <FormControlLabel value="female" control={<Radio />} label="おんなの子" />
            </RadioGroup>
        </FormControl>
    );
}
export default GenderRadioBtnGroup;