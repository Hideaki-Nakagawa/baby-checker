import React from 'react';
import { InputField } from '../atoms';

/** 身長入力フィールド コンポーネント */
const HeightInputField = () => {
    return (
        <InputField
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
