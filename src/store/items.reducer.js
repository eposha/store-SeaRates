import { ALL_ITEMS, TOTAL_PRICE, FINAL_ORDER } from './items.actions';

const initialState = {
    items: [], totalPrice: 0, finalOrder: { finalPrice: 0, mainItems: [], additionalItems: [] }
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_ITEMS:
            return {
                ...state,
                items: action.payload.items
            };

        case TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload.totalPrice
            }

        case FINAL_ORDER:
            return {
                ...state,
                finalOrder: action.payload.finalOrder
            }

        default: return state;
    }
};


export default itemsReducer;