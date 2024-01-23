
import {useState} from 'react'
import { AddCategory, GiftGrid } from './components'


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Valorant'])

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        setCategories([...categories, newCategory])
    }

    console.log(categories)

    return(
    <>
    {/* Titulo */}
    <h1>GiftExpertApp</h1>

    {/* Input */}
    <AddCategory 
        onNewValue={ (event) => onAddCategory(event) }
    />

    {/* Lista */}

    { categories.map( (category) => ( <GiftGrid key={category} category={category}/> )) }
    </>
    )
}