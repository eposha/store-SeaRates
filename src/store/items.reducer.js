import { ALL_ITEMS, TOTAL_PRICE } from './items.actions';

const initialState = {
    items: [], totalPrice: 0
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_ITEMS:
            return {
                ...state,
                items: action.payload.items
            };

        case TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: action.payload.totalPrice
            }
        }

        default: return state;
    }
};


export default itemsReducer;