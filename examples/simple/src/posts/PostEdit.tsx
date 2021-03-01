import * as React from 'react';
import {
    Edit,
    FormTab,
    ReferenceArrayInput,
    AutocompleteArrayInput,
    ArrayInput,
    SimpleFormIterator,
    TabbedForm,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

// prepopulate with existing data
const PostEdit = props => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Array">
                <ArrayInput source="related">
                    <SimpleFormIterator>
                        <ReferenceArrayInput
                            //broken when omitted
                            basePath="/comments"
                            source="comments"
                            label="Comments"
                            reference="comments"
                        >
                            <AutocompleteArrayInput
                                optionText={record => {
                                    if (!record) return null;

                                    return `${record.id}`;
                                }}
                            />
                        </ReferenceArrayInput>
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default PostEdit;
