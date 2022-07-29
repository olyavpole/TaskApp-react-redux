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

export const moveCard = (card, listID, targetListID) => {
    return {
        type: 'MOVE_CARD',
        payload: {card, listID, targetListID}
    }
}