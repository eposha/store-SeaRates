export const itemsListSelector = state => {
    return state.items.items
};

export const additionalItemsSelector = state => {
    return itemsListSelector(state).filter(item => item.isChecked === true);
};

export const finalOrderSelector = state => {
    return state.items.finalOrder
};

export const mainPriceSelector = state => {
    const allItemsSelected = additionalItemsSelector(state);
    if (allItemsSelected.length < 0) return 0;
    const totalPrice = allItemsSelected.reduce(
        (acc, currentValue) =>
            +acc +
            +currentValue.price.slice(1) *
            (+currentValue.quantity ? +currentValue.quantity : 1),
        0
    );
    return +totalPrice.toFixed(2);
};





