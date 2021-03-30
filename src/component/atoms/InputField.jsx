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
    const [values, setValues] = useState({
        text: "",
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
            <FormHelperText id={props.title_id}>{props.title_text}</FormHelperText>
            <Input
                id={props.id}
                value={values.text}
                
                onChange={handleChange('text')}
                endAdornment={<InputAdornment position="end">{props.unit_text}</InputAdornment>}
                aria-describedby={props.title_id}
                inputProps={{
                    'maxLength' : props.maxLength,
                    'aria-label': props.label,
                }}
            />
        </FormControl>
    )
}
export default InputField;
