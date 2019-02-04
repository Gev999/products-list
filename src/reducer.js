const initialState = {
    productList: [
        {
            id: 1,
            name: 'First product'
        },
        {
            id: 2,
            name: 'Second product'
        }
    ]
};

const reducer = (state = initialState, action)=> {
    switch(action.type) {
        case 'PRODUCT_CREATED': 
            return {
                productList: [...state.productList, action.product]
            }
        case 'PRODUCT_REMOVED':
            return {
                productList: removeProduct(action.productId, state),
            }
        case 'PRODUCT_WRITED':
            return {
                productList: addProductName(action.id, action.text, state),
            }
        default: return state;
    }
}

const removeProduct = (id, state)=> {
    
    const { productList } = state;
    const idx = findIdx(productList, id);
    return [...productList.slice(0, idx), ...productList.slice(idx + 1)];
}

const addProductName = (id, text, state)=> {
    const { productList } = state;
    const idx = findIdx(productList, id);
    const newItem = {
        id: productList[idx].id,
        name: text,
    }
    return [...productList.slice(0, idx), newItem, ...productList.slice(idx + 1)];
}

const findIdx = (productList, id)=> {
    let idx;
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].id === id) {
            idx = i;
            break;
        }
    }
    return idx;
}

export default reducer;