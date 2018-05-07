// @flow
export const types = {
    REPLACE_URL: 'REPLACE_URL',
    PUSH_URL: 'PUSH_URL',
    GO_HOME: 'GO_HOME',
};

export const actionCreators = {
    replaceURL: (URL: string) => ({
        type: types.REPLACE_URL,
        payload: URL,
    }),
    pushURL: (URL: string) => ({
        type: types.PUSH_URL,
        payload: URL,
    }),
    navHome: () => ({
        type: types.GO_HOME,
    }),
};
