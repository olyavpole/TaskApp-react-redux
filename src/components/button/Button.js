import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addList, addCard } from '../../actions';

import './button.scss';

const Button = ({type, listID}) => {

    const [formOpen, setFormOpen] = useState(false);
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const classes = type === 'card' ? 'button--card' : 'button--list';
    const action = type === 'card' ? addCard(text, listID) : addList(text);

    const onAdd = () => {
        dispatch(action);
        setText('');
        setFormOpen(false);
    }

    const renderForm = () => {
        return (
            <>
                <div className="form">
                    <input 
                    className="form__input" 
                    type="text" 
                    placeholder={`add ${type} name`}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                    <div className="form__wrapper">
                        <button 
                            className="form__btn form__btn--left"
                            onClick={onAdd}
                        >add {type}</button>
                        <button 
                            className="form__btn form__btn--right"
                            // onClick={() => dispatch(cancelAction())}
                        >cancel</button>
                    </div>
                </div>
            </>
        )
    }

    const renderAddButton = () => {
        return (
            <button 
                className={classes}
                onClick={() => setFormOpen(true)}
                >add new {type}</button>
        )
    }

    const data = formOpen ? renderForm() : renderAddButton();

    return (
        <>
            {data}
        </>
    )
}

export default Button;