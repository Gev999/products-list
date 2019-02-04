const productWrited = (text, id)=> {
    return {
        type: 'PRODUCT_WRITED',
        text: text,
        id
    }
}

const productCreated = (newProduct)=> {
    return {
        type: 'PRODUCT_CREATED',
        product: newProduct
    }
}

const productRemoved = (productId)=> {
    return {
        type: 'PRODUCT_REMOVED',
        productId,
    }
}

export {
    productWrited,
    productCreated,
    productRemoved,
}