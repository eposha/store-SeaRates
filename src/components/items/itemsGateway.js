export const setChecked = (findItem, isChecked, item) => {
    if (isChecked === false) {
        findItem.quantity = 1;
        findItem.price = item.price;
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