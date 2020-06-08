import React, { ChangeEvent } from 'react';

import './styles.css';

interface ContatcInput {
    onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Contact: React.FC<ContatcInput> = ({ onTextChange }) => {
    return (
        <fieldset>
            <legend>
                <h2>Dados</h2>
            </legend>

            <div className="field">
                <label htmlFor="name">Nome da entidade</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={onTextChange}
                />
            </div>

            <div className="field-group">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        onChange={onTextChange} 
                    />
                </div>
                <div className="field">
                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input 
                        type="text" 
                        name="whatsapp" 
                        id="whatsapp" 
                        onChange={onTextChange}
                    />
                </div>
            </div>
        </fieldset>
    )
}

export default Contact;