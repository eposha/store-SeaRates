import { getStoreData } from '../fakeApi/fetchData';

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const CREATE_FINAL_ORDER = 'CREATE_FINAL_ORDER';

export const setAllItems = items => ({
    type: GET_ALL_ITEMS,
    payload: { items }
});

export const setFinalOrder = finalOrder => ({
    type: CREATE_FINAL_ORDER,
    payload: { finalOrder }
})


export const getAllItems = () => (dispatch) => {
    getStoreData()
        .then(data => dispatch(setAllItems(data)))
};