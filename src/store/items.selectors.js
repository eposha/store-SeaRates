export const itemsListSelector = state => {
    return state.items.items
};

export const totalPriceSelector = state => {
    return state.items.selectedItems.totalPrice
};

export const selectedItemsSelector = state => {
    return state.items.selectedItems.items
};



