import React from "react"
import "./CategoryList.css"

export default function CategoryList({ categories }){

    function generateClassName(input){
        console.log(input.split(' ').join('').toLowerCase())
        return input.split(' ').join('').toLowerCase()
    }

    if(categories){
        return(
                <ul className="list-container">
                    {categories.map(({ name }) => <h1 className={`list-item ${generateClassName(name)}`}>{name}</h1>)}
                </ul>
        ) 
    }

return null

}