
import './button.scss';

const Button = ({type}) => {
    
    const text = type === 'card' ? 'card' : 'list';

    return (
        <>
            <button>add new {text}</button>
        </>
    )
}

export default Button;