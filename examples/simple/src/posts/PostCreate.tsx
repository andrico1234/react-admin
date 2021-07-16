import * as React from 'react';

import { Create, SimpleForm, FileInput, FileField } from 'react-admin'; // eslint-disable-line import/no-unresolved

const PostCreate = props => {
    return (
        <Create {...props}>
            <SimpleForm>
                <FileInput
                    source="pdffile"
                    label="PDF-Template"
                    maxSize={5000000}
                >
                    <FileField source="src" title="title" />
                </FileInput>
            </SimpleForm>
        </Create>
    );
};

export default PostCreate;
