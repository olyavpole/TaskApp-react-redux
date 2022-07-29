import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { ItemTypes } from '../../actions/types';

import Card from '../card/Card';
import Button from '../button/Button';
import { moveCard } from '../../actions';

import './list.scss'

const List = ({title, cards, listID}) => {

    const dispatch = useDispatch();

    const onCardMove = (id, listID, targetListID) => {
        const nedeedCard = cards.filter(card => card.id === id)[0];
        dispatch(moveCard(nedeedCard, listID, targetListID))
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: item  => onCardMove(item.id, item.listID, listID),
        collect: monitor => ({
          isOver: !!monitor.isOver()
        }),
    }))

    const data = cards.map(card => {
        return (
            <Card text={card.text} id={card.id} key={card.id} listID={listID}/>
        )
    })

    return (
        <>
            <div className="list">
                <h2 className="list__title" onClick={() => console.log(listID)}>{title}</h2>
                <div 
                    className="card__wrapper"
                    ref={drop}
                    style={{
                        backgroundColor: isOver ? 'red' : '',
                    }}>
                    {data}
                </div>
                <Button type='card' listID={listID}/>
            </div>
        </>
    )
}

export default List;