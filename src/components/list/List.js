import Card from '../card/Card';
import Button from '../button/Button';

import './list.scss'

const List = ({title, cards}) => {

    const data = cards.map(card => {
        return (
            <Card text={card.text} key={card.id}/>
        )
    })

    return (
        <>
            <div className="list">
                <h2 className="list__title">{title}</h2>
                {data}
                <Button type='card'/>
            </div>
        </>
    )
}

export default List;