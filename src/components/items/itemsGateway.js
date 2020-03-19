export const setChecked = (findItem, isChecked, item) => {
    if (isChecked === false) {
        findItem.quantity = 1;
        findItem.price = item.price;
        findItem.isChecked = isChecked;
    } else {
        findItem.isChecked = isChecked;
    }
    return findItem;
};

export const setQuntity = (findItem, data) => {
    const number = findItem.quantity ? findItem.quantity : 1;
    findItem.quantity = number + data;
    return findItem;
};

export const updateItemsList = (allItems, id, func, data, item) => {
    const findItemIndex = allItems.findIndex(item => item._id === id);
    const findItem = allItems.find(item => item._id === id);
    return [
        ...allItems.slice(0, findItemIndex),
        func(findItem, data, item),
        ...allItems.slice(findItemIndex + 1)
    ];
};

export const totalPrice = allItems => {
    const selectedItem = allItems.filter(item => item.isChecked === true);
    if (selectedItem < 1) return 0;

    const totalPrice = selectedItem.reduce(
        (acc, currentValue) =>
            +acc +
            +currentValue.price.slice(1) *
            (+currentValue.quantity ? +currentValue.quantity : 1),
        0
    );
    return +totalPrice.toFixed(2);
};

export const setOrder = (selectedItems, id, idx, finalOrder) => {
    const findSelectedItem = selectedItems.find((item, index) => index === idx);
    const findAdditionalItem = findSelectedItem.additional.find(
        item => item._id === id
    );
    const copyfinalOrder = Object.assign({}, finalOrder);
    const hasAdditional = copyfinalOrder.additionalItems.find(
        item => item._id === findAdditionalItem._id
    );
    if (hasAdditional) {
        const filterItem = copyfinalOrder.additionalItems.filter(
            item => item._id !== findAdditionalItem._id
        );
        copyfinalOrder.additionalItems = filterItem;
        copyfinalOrder.finalPrice -= +hasAdditional.price.slice(1);
        return copyfinalOrder;
    } else {
        copyfinalOrder.additionalItems = [
            ...copyfinalOrder.additionalItems,
            findAdditionalItem
        ];
        copyfinalOrder.finalPrice += +findAdditionalItem.price.slice(1);
        return copyfinalOrder;
    }
};