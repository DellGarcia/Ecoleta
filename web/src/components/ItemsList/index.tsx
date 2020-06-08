import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

interface Props {
    selectedItems: number[];
    setSelectedItems: (values: number[]) => void; 
}

interface Item {
    id: number;
    title: string;
    image_url: string;
}

const ItemsList: React.FC<Props> = ({ selectedItems, setSelectedItems}) => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        })
    }, []);

    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex(item => item === id);

        if(alreadySelected >= 0) {
            const filtereditems = selectedItems.filter(item => item !== id);

            setSelectedItems(filtereditems);
        } else {
            setSelectedItems([...selectedItems, id]);
        }
        
    }

    return (
        <fieldset>
            <legend>
                <h2>items de coleta</h2>
                <span>Selecione um ou mais items abaixo</span>
            </legend>

            <ul className="items-grid">
                {items.map(item => (
                    <li key={item.id} 
                        onClick={() => handleSelectItem(item.id)}
                        className={selectedItems.includes(item.id) ? 'selected' : ''}
                    >
                        <img src={item.image_url} alt={item.title}/>
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </fieldset>
    );
}

export default ItemsList;