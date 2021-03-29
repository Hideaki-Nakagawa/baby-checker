import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, FormControl, FormHelperText, Input, InputAdornment} from '@material-ui/core';

/** @summary style define*/
const useStyles = makeStyles((theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '10em',
        },
    }),
);

const WeightInputField = () => {

    /** @summary state hook */
    const [values, setValues] = useState({
        weight: "",
    });

    /** 
     * @summary state change 
     * @details 複数のステートを持つ場合のステート変更関数
     */
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    /** @summary style hook api */
    const classes = useStyles();

    return (
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
            <FormHelperText id="weight_input_helper_text">体重</FormHelperText>
            <Input
                id="weight_input"
                value={values.weight}
                
                onChange={handleChange('weight')}
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="weight_input_helper_text"
                inputProps={{
                    'maxLength' : 4,
                    'aria-label': 'weight',
                }}
            />
        </FormControl>
    )
}
export default WeightInputField;
