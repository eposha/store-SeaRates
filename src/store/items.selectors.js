export const itemsListSelector = state => {
    return state.items.items
};

export const totalPriceSelector = state => {
    return state.items.totalPrice
};

export const additionalItemsSelector = state => {
    return itemsListSelector(state).filter(item => item.isChecked === true);
};

export const finalOrderSelector = state => {
    return state.items.finalOrder
};




