import * as React from 'react';
import {
    Edit,
    FormTab,
    ReferenceArrayInput,
    AutocompleteArrayInput,
    FormDataConsumer,
    ArrayInput,
    SimpleFormIterator,
    SelectInput,
    TabbedForm,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

const choices = [
    { id: 'tech', name: 'tech' },
    { id: 'lifestyle', name: 'lifestyle' },
];

function DebugField(props) {
    console.log(props);
    return null;
}

// prepopulate with existing data
const PostEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm initialValues={{ average_note: 0 }} warnWhenUnsavedChanges>
            {/* <FormTab label="Single">
        <SelectInput
          label="category"
          source="category"
          allowEmpty
          choices={choices}
        />

        <FormDataConsumer>
          {({ formData, ...rest }) => {
            if (!formData?.category) {
              return null;
            }

            const { category } = formData;

            return (
              <ReferenceArrayInput
                label="Comments"
                source="comments"
                reference="comments"
                filter={{ category }}
              >
                <AutocompleteArrayInput
                  source="id"
                  optionText={(record) => {
                    if (!record) return null;

                    return record.title;
                  }}
                />
              </ReferenceArrayInput>
            );
          }}
        </FormDataConsumer>
      </FormTab> */}
            <FormTab label="Array">
                <ArrayInput source="related">
                    <SimpleFormIterator>
                        <SelectInput
                            label="category"
                            source="category"
                            allowEmpty
                            choices={choices}
                        />

                        <FormDataConsumer>
                            {({
                                formData,
                                scopedFormData,
                                getSource,
                                ...rest
                            }) => {
                                if (!scopedFormData?.category) {
                                    return null;
                                }

                                console.log('res', rest, scopedFormData);

                                const { category } = scopedFormData;

                                return (
                                    <ReferenceArrayInput
                                        {...rest}
                                        // basePath="/comments" broken when omitted
                                        source={getSource('comments')}
                                        label="Comments"
                                        reference="comments"
                                        filter={{ category }}
                                    >
                                        <AutocompleteArrayInput
                                            optionText={record => {
                                                if (!record) return null;

                                                return `${record.id}`;
                                            }}
                                        />
                                    </ReferenceArrayInput>
                                );
                            }}
                        </FormDataConsumer>
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default PostEdit;
