/* eslint-disable react/prop-types */
import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (value) => {
        setInputValue(value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if (newInputValue.length <= 1) return;

        //onAddCategories( categories => [ inputValue, ...categories ]);
        onNewValue(newInputValue);
        setInputValue('')

    }

    return(
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(event) => onInputChange(event.target.value)}
            />
        </form>
    )
}