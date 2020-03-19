import { GET_ALL_ITEMS, CREATE_FINAL_ORDER } from './items.actions';

const initialState = {
    items: [], totalPrice: 0, finalOrder: { finalPrice: 0, mainItems: [], additionalItems: [] }
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ITEMS:
            return {
                ...state,
                items: action.payload.items
            };

        case CREATE_FINAL_ORDER:
            return {
                ...state,
                finalOrder: action.payload.finalOrder
            }

        default: return state;
    }
};


export default itemsReducer;