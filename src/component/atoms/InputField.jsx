import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, FormControl, FormHelperText, Input, InputAdornment } from '@material-ui/core';

/** @summary style define*/
const useStyles = makeStyles((theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
    }),
);

/**
 * インプトフィールド コンポーネント
 * @param {*} props 
 * @arg title_id : タイトルid
 * @arg title_text : タイトル
 * @arg id : inputフィールドid
 * @arg unit_text : 単位文字列 
 * @arg maxLength : 入力文字数制限
 * @arg label : エリアラベル
 * 
 */
const InputField = (props) => {

    /** @summary state hook */
    const [myText, setText] = useState('');

    /** 
     * @summary state change 
     * @details ステートを変更して、親要素に値を投げる
     */
    const handleChange = (event) => {
        const newValue = event.target.value;
        setText(newValue);
        if (props.onChange) {
            props.onChange(newValue);
        }
    };

    /** @summary style hook api */
    const classes = useStyles();

    return (
        <FormControl className={clsx(classes.margin, classes.withoutLabel, props.add_classes.Size)}>
            <FormHelperText id={props.title_id}>{props.title_text}</FormHelperText>
            <Input
                id={props.id}
                value={myText}
                onChange={handleChange}
                endAdornment={<InputAdornment position="end">{props.unit_text}</InputAdornment>}
                aria-describedby={props.title_id}
                inputProps={{
                    'maxLength': props.maxLength,
                    'aria-label': props.label,
                }}
            />
        </FormControl>
    )
}

export default InputField;
