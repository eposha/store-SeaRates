import { ALL_ITEMS } from './items.actions';

const initialState = {
    items: [], selectedItems: {
        totalPrice: 0,
        items: []
    }
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_ITEMS:
            return {
                ...state,
                items: action.payload.items
            };

        default: return state;
    }
};


export default itemsReducer;