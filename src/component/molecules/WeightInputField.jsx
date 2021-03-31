import React from 'react';
import { InputField } from '../atoms';
import { makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
    createStyles({
        "Size": {
            width: "10em",
        }
    }),
);

/** 体重入力フィールド コンポーネント */
const WeightInputField = (props) => {

    /** @summary style hook api */
    const classes = useStyles();

    /** @summary pass state*/
    const handleChange = (data) => { 
        if (props.onChange) {
            props.onChange(data);
        }
    }

    return (
        <InputField
            onChange={handleChange}
            add_classes={classes}
            title_id="weight_title"
            title_text="体重"
            id="weight_input"
            unit_text="kg"
            maxLength={4}
            label="weight"
        />
    )
}
export default WeightInputField;
