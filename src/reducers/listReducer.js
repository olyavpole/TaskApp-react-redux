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
                text: 'card3',
                id: 1
            },
            {
                text: 'card4',
                id: 2
            }
        ]
    }
];

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            const index = state[state.length - 1].id + 1;
            const newList = {
                title: action.payload,
                id: index,
                cards: []
            };
            return [...state, newList];
        
        case 'ADD_CARD':
            const listArray = state.filter(list => list.id === action.payload.listID)
            const cardIndex = listArray[0].cards.length + 1;

            const newCard = {
                text: action.payload.text,
                id: cardIndex
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

        case 'MOVE_CARD':
            const currentList = state.filter(list => list.id === action.payload.listID)[0];
            const targetList = state.filter(list => list.id === action.payload.targetListID)[0];

            const newCurrentList = {
                ...currentList,
                cards: currentList.cards.filter(card => card.id !== action.payload.card.id)
            }
            const newTargetList = {
                ...targetList, 
                cards: [...targetList.cards, action.payload.card]
            }

            const allState = [newCurrentList, newTargetList];

            return allState;
            
        
        default:
            return state
    }
}

export default listReducer;