import * as React from 'react';
import {
    Edit,
    FormTab,
    TabbedForm,
    ArrayInput,
    SimpleFormIterator,
    TextInput,
    required,
    useInput,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

function validate(values: any) {
    const { nestedData } = values;
    const errors = {
        nestedData: [],
    };

    if (nestedData?.length) {
        nestedData.forEach((data, i) => {
            if (!data) return;

            const error: Record<string, unknown> = {};

            const { name } = data;

            if (!name) {
                error.name = ['no val'];
            }

            errors.nestedData[i] = error;
        });
    }

    console.log(errors);

    return errors;
}

const PostEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm validate={validate}>
            <FormTab label="post.form.miscellaneous">
                <ArrayInput source="nestedData" label="Tags">
                    <SimpleFormIterator>
                        <TextInput source="id" label="ID" />
                        <TextInput source="name" label="Name" />
                        <OtherInput source="tag" />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

function OtherInput(props) {
    const { input } = useInput(props);
    const { onBlur, onFocus, ...rest } = input;

    return (
        <TextInput
            source={props.source}
            label="tag"
            validate={required('is required')}
            {...rest}
        />
    );
}

export default PostEdit;
