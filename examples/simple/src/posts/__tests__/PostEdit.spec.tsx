import React from 'react';
import { TestContext } from 'ra-test';
import { render, RenderResult, waitFor } from '@testing-library/react';
import PostEdit from '../PostEdit';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { DataProviderContext } from 'ra-core';

describe('PostEdit', () => {
    let testUtils: RenderResult;

    const initialState = {
        admin: {
            resources: {
                posts: {},
                comments: {},
            },
        },
    };

    beforeEach(() => {
        const defaultEditProps = {
            basePath: '/',
            id: '123',
            resource: 'posts',
            location: {},
            match: {},
            permissions: 'user',
        };

        const dataProvider: any = {
            getOne: () => Promise.resolve({ data: { id: 123 } }),
            getList: () => Promise.resolve({ data: [], total: 0 }),
            getManyReference: () => Promise.resolve({ data: [], total: 0 }),
        };

        testUtils = render(
            <TestContext enableReducers initialState={initialState}>
                <DataProviderContext.Provider value={dataProvider}>
                    <ThemeProvider theme={createMuiTheme()}>
                        <PostEdit {...defaultEditProps} />
                    </ThemeProvider>
                </DataProviderContext.Provider>
            </TestContext>
        );
    });

    it('should', async () => {
        const { queryAllByDisplayValue } = testUtils;

        await waitFor(() => {
            return expect(queryAllByDisplayValue('123')).toHaveLength(1);
        });
    });
});
