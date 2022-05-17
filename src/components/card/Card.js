import './card.scss'

const Card = ({text}) => {
    return (
        <>
            <div className="card">
                <p className="card__text">{text}</p>
            </div>
        </>
    )
}

export default Card;