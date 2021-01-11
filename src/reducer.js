export const initialState = {
    user: null,
    playlists: [],
    playings: false,
    item: null,
    // token: 'BQCtBRpW7fNlDAqZczblCnOlL7tVG9qVCCnLQ7NhONkAy4pulVS3w342z4pNenUlrvBauwM_SW5H9MKtpjq7CS8kOHP2bHBdKftP9eEOg1SVNcE1L9y0ndxHffTRHlrDIjTxZQKIUcTMs5Gw1Bvj8DWeGLexRQ',
};

const reducer = (state, action) => {
    console.log(action);

    // action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default: 
            return state;
    }
}

export default reducer;