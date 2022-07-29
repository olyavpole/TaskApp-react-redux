import { useDrag } from 'react-dnd';

import { ItemTypes } from '../../actions/types';

import './card.scss'

const Card = ({text, id, listID}) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: {
            id:id,
            listID: listID
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <>
            <div className="card"
                onClick={() => console.log(id)}
                ref={drag}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    cursor: 'move',
                }}>
                <p className="card__text">{text}</p>
            </div>
        </>
    )
}

export default Card;