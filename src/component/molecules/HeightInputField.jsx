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

/** 身長入力フィールド コンポーネント */
const HeightInputField = (props) => {

    /** @summary style hook api */
    const classes = useStyles();

    /** @summary pass state */
    const handleChange = (data) => {
        if (props.onChange) {
            props.onChange(data);
        }
    }

    return (
        <InputField
            onChange={handleChange}
            add_classes={classes}
            title_id="height_title"
            title_text="身長"
            id="height_input"
            unit_text="cm"
            maxLength={6}
            label="height"
        />
    )
}
export default HeightInputField;
