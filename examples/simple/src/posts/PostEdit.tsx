import * as React from 'react';
import {
    Edit,
    FormTab,
    TabbedForm,
    ArrayInput,
    SimpleFormIterator,
    TextInput,
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

    console.log('in global validator');

    return errors;
}

function customValidator(val: string) {
    console.log('in input validator');
    if (!val) return 'is required';
}

const PostEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm validate={validate}>
            <FormTab label="post.form.miscellaneous">
                <ArrayInput source="nestedData" label="data">
                    <SimpleFormIterator>
                        <TextInput source="name" label="Name" />

                        <TextInput
                            source="tag"
                            label="tag"
                            validate={customValidator}
                        />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default PostEdit;
