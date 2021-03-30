import React from 'react';
import { InputField } from '../atoms';

/** 体重入力フィールド コンポーネント */
const WeightInputField = () => {
    return (
        <InputField
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
