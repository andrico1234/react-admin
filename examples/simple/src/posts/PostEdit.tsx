import * as React from 'react';
import {
    ArrayInput,
    Edit,
    FormTab,
    SimpleFormIterator,
    TextInput,
    TabbedForm,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

function validate(values: any) {
    const { authors } = values;
    const errors: any = {
        authors: [],
    };

    // works fine
    errors.singleRole = ['A role already exists with this author.'];

    // this doesn't works
    if (authors) {
        authors.forEach((author: any, i: number) => {
            if (!author) return;

            const error: any = {};

            if (author.role) {
                error.role = ['A role already exists with this author.'];
                errors.authors = [];
                errors.authors[i] = error;
            }
        });
    }

    return errors;
}

const PostEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm warnWhenUnsavedChanges validate={validate}>
            <FormTab label="post.form.summary">
                {/* works fine */}
                <TextInput source="singleRole" />

                {/* doesn't work */}
                <ArrayInput source="authors">
                    <SimpleFormIterator>
                        <TextInput source="role" />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default PostEdit;
