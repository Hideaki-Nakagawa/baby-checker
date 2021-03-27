import React, {useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const GenderRadioBtnGroup = () => {
    const [value, setValue] = React.useState('male');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">性別</FormLabel>
            <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange}>
                <FormControlLabel value="male" control={<Radio />} label="おとこの子" />
                <FormControlLabel value="female" control={<Radio />} label="おんなの子" />
            </RadioGroup>
        </FormControl>
    );
}
export default GenderRadioBtnGroup;