import './card.scss'

const Card = ({text}) => {
    return (
        <>
            <div className="card">
                <h3 className="card__text">{text}</h3>
            </div>
        </>
    )
}

export default Card;