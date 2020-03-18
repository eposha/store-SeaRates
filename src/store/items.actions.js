import { getStoreData } from '../fakeApi/fetchData';

export const ALL_ITEMS = 'ALL_ITEMS';

export const setAllItems = items => ({
    type: ALL_ITEMS,
    payload: { items }
});


export const getAllItems = () => (dispatch) => {
    getStoreData()
        .then(data => dispatch(setAllItems(data)))
};