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
        default:
            return state
    }
}

export default listReducer;