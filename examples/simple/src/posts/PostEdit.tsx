import * as React from 'react';
import {
    ArrayInput,
    Edit,
    TextField,
    FormTab,
    SimpleFormIterator,
    TabbedForm,
    TextInput,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import PostTitle from './PostTitle';

// access http://localhost:8080/#/posts/12

const PostEdit = props => {
    return (
        <Edit title={<PostTitle />} {...props}>
            <TabbedForm>
                <FormTab label="post.form.summary">
                    <ArrayInput source="backlinks">
                        <SimpleFormIterator>
                            <TextField source="url" />
                            <TextInput source="url" />
                        </SimpleFormIterator>
                    </ArrayInput>
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};

export default PostEdit;
