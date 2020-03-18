export const itemsListSelector = state => {
    return state.items.items
};

export const totalPriceSelector = state => {
    return state.items.totalPrice
};

export const selectedItemsSelector = state => {
    return itemsListSelector(state).filter(item => item.isChecked === true)
};



