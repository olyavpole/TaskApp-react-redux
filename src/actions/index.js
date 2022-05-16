export const addList = (title) => {
    return {
        type: 'ADD_LIST',
        payload: title
    }
}

export const addCard = (text, listID) => {
    return {
        type: 'ADD_CARD',
        payload: {text, listID}
    }
}