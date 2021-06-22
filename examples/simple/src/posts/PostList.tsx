import * as React from 'react';
import BookIcon from '@material-ui/icons/Book';
import dayjs from 'dayjs';
import {
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    Filter,
    List,
    NumberField,
    TextField,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

export const PostIcon = BookIcon;

export const pastDate = (message: string) => (date: string) => {
    const isAfterToday = dayjs().isBefore(date, 'day');

    const error = isAfterToday ? message : undefined;

    return error;
};

const PostFilter = props => (
    <Filter {...props}>
        <DateInput
            alwaysOn
            label="End date"
            source="end"
            validate={pastDate('Cannoy pick a day in the past')}
        />
    </Filter>
);

const PostList = props => {
    return (
        <List {...props} filters={<PostFilter />}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="published_at" sortByOrder="DESC" />

                <BooleanField
                    source="commentable"
                    label="resources.posts.fields.commentable_short"
                    sortable={false}
                />
                <NumberField source="views" sortByOrder="DESC" />
            </Datagrid>
        </List>
    );
};

export default PostList;
