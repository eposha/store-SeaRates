import { getStoreData } from '../fakeApi/fetchData';

export const ALL_ITEMS = 'ALL_ITEMS';
export const TOTAL_PRICE = 'TOTAL_PRICE';

export const setAllItems = items => ({
    type: ALL_ITEMS,
    payload: { items }
});

export const setTotalPrice = totalPrice => ({
    type: TOTAL_PRICE,
    payload: { totalPrice }
});


export const getAllItems = () => (dispatch) => {
    getStoreData()
        .then(data => dispatch(setAllItems(data)))
};