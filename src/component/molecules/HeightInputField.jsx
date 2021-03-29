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

const HeightInputField = () => {

    /** @summary state hook */
    const [values, setValues] = useState({
        height: "",
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
            <FormHelperText id="height_input_helper_text">身長</FormHelperText>
            <Input
                id="height_input"
                value={values.height}
                
                onChange={handleChange('height')}
                endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                aria-describedby="height_input_helper_text"
                inputProps={{
                    'maxLength' : 6,
                    'aria-label': 'height',
                }}
            />
        </FormControl>
    )
}
export default HeightInputField;
