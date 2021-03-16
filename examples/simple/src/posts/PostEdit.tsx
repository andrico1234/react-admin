import * as React from 'react';
import {
    BooleanInput,
    Edit,
    FormTab,
    TabbedForm,
    TextInput,
    required,
    FormDataConsumer,
    minValue,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

const PostEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm initialValues={{ average_note: 0 }} warnWhenUnsavedChanges>
            <FormTab label="post.form.summary">
                <BooleanInput source="show" />
                <FormDataConsumer>
                    {({ formData }) => {
                        if (!formData.show) return null;
                        return (
                            <TextInput
                                source="title"
                                validate={[
                                    required('A numeric value is required'),
                                    minValue(1, 'Value must be 1 or greater'),
                                ]}
                                resettable
                            />
                        );
                    }}
                </FormDataConsumer>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default PostEdit;
