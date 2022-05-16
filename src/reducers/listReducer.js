const initialState = [
    {
        title: 'list1',
        id: 1,
        cards: [
            {
                text: 'card1',
                id: 1
            },
            {
                text: 'card2',
                id: 2
            }
        ]
    },
    {
        title: 'list2',
        id: 2,
        cards: [
            {
                text: 'card1',
                id: 1
            },
            {
                text: 'card2',
                id: 2
            }
        ]
    }
];

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            const newList = {
                title: action.payload,
                id: 3,
                cards: []
            };
            return [...state, newList];
        
        case 'ADD_CARD':
            const newCard = {
                text: action.payload.text,
                id: 3
            };

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            })

            return newState;
        
        default:
            return state
    }
}

export default listReducer;